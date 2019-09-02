import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../services/image.service';
import {FormControl, Validators} from '@angular/forms';
import * as uuid from 'uuid';
import {RegistrationDoctorService} from '../../services/registration-doctor.service';
import {HttpClient} from '@angular/common/http';
import {Doctor} from '../../models/doctor';
import {Role} from '../../models/role';
import {DoctorService} from '../../services/doctor.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private registrationDoctorService: RegistrationDoctorService,
              private imageService: ImageService,
              private doctorService: DoctorService) {
  }

  doctor: Doctor = new Doctor();
  selectedFile: File = null;

  namePhoto: any;
  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  confirmFormControl = new FormControl('', [
    Validators.required,
  ]);


  hide = true;


  ngOnInit() {
  }

  registerDoctor() {
    console.log(this.doctor);
    this.namePhoto = uuid();
    if (this.selectedFile != null) {
      const strings = this.selectedFile.name.split('.');
      console.log(strings);
      if (this.doctor.image !== this.doctor.image) {
        this.namePhoto = uuid();
      }
      this.doctor.image = /*'book-ang/src/assets/img' +*/ this.namePhoto + '.' + strings[1];

      this.imageService.uploadImage(this.selectedFile, this.doctor.image).subscribe(value => {
        console.log(value);
      });
    }
    this.doctor.role = Role.ROLE_DOCTOR;
    this.registrationDoctorService.createDoctor(this.doctor).subscribe(value => {
      console.log(value);
    });
    console.log(this.doctor);
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];

  }

  getAllDoctors() {
    this.doctorService.getDoctorsInfo().subscribe(value => {
      console.log(value);
    });
  }

}
