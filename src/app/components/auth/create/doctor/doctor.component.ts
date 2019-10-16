import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../../../services/image.service';
import {FormControl, Validators} from '@angular/forms';
import * as uuid from 'uuid';
import {Doctor} from '../../../../models/doctor';
import {Role} from '../../../../enums/role';
import {DoctorService} from '../../../../services/doctor.service';
import {LoginService} from '../../../../services/login.service';
import {Speciality} from '../../../../enums/speciality';
import * as moment from 'moment';


@Component({
    selector: 'app-doctors',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

    constructor(private imageService: ImageService,
                private doctorService: DoctorService,
                private loginService: LoginService) {
    }

    doctor: Doctor = new Doctor();
    selectedFile: File = null;
    iconPath: 'assets/img/female-doctor.jpg';
    namePhoto: any;
    passFormControl = new FormControl('', [
        Validators.required,
    ]);
    confirmFormControl = new FormControl('', [
        Validators.required,
    ]);


    hide = true;

    specialities = Object.values(Speciality).map(key => Speciality[key]).filter(value => typeof value === 'string') as unknown as string;

    ngOnInit() {
    }


    registerDoctor() {
        console.log(this.doctor);
        this.namePhoto = uuid();
        if (this.selectedFile != null) {
            const format = this.selectedFile.name.split('.').pop();
            console.log(format);
            if (this.doctor.image !== this.doctor.image) {
                this.namePhoto = uuid();
            }
            this.doctor.image = this.namePhoto + '.' + format;

            this.imageService.uploadImage(this.selectedFile, this.doctor.image).subscribe(value => {
                console.log(value);
            });
        }
        this.doctor.role = Role.ROLE_DOCTOR;
        this.doctor.dateOfBirth = moment(this.doctor.dateOfBirth).format('YYYY-MM-DDT00:00:00.000') + 'Z';
        this.doctorService.createDoctor(this.doctor).subscribe(value => {
            console.log(value);
        });
        // this is login after you create user
        // this.loginService.loginUser(this.doctor);
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
