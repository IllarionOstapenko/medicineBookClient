import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {ImageService} from '../../services/image.service';
import {FormControl, Validators} from '@angular/forms';
import * as uuid from 'uuid';
import {Patient} from '../../models/patient';
import {Role} from '../../models/role';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private imageService: ImageService,
              private patientService: PatientService) {
  }

  patient: Patient = new Patient();
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

  registerUser() {
    console.log(this.patient);
    this.namePhoto = uuid();
    if (this.selectedFile != null) {
      const strings = this.selectedFile.name.split('.');
      const format = strings.pop();
      this.patient.image = /*'book-ang/src/assets/img' +*/ this.namePhoto + '.' + format;
      this.imageService.uploadImage(this.selectedFile, this.patient.image).subscribe(value => {
        console.log(value);
      });
    }
    this.patient.role = Role.ROLE_PATIENT;
    this.authenticationService.createPatient(this.patient).subscribe(value => {
      console.log(value);
    }, error => {
      if (error.status === 500) {
        console.log('errror');
      }
      console.log(error);
    });
    console.log(this.patient);
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];

  }

  getAllPatients() {
    this.patientService.getPatientsInfo().subscribe(value => {
      console.log(value);
    });
  }


}
