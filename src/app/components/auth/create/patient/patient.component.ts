import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../../../services/image.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import * as uuid from 'uuid';
import {Patient} from '../../../../models/patient';
import {Role} from '../../../../enums/role';
import {PatientService} from '../../../../services/patient.service';

import {ErrorStateMatcher} from '@angular/material';
import {LoginService} from '../../../../services/login.service';
import * as moment from 'moment';


/** Error when the parent is invalid */
class CrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.dirty && form.invalid;
    }
}


@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

    constructor(private imageService: ImageService,
                private patientService: PatientService,
                private loginService: LoginService,
                private fb: FormBuilder) {
        this.initForm();
    }

    userForm: FormGroup;
    errorMatcher = new CrossFieldErrorMatcher();


    patient: Patient = new Patient();
    selectedFile: File = null;
    namePhoto: any;
    currentUser: object;
    // passFormControl = new FormControl('', [
    //   Validators.required,
    // ]);
    // confirmFormControl = new FormControl('', [
    //   Validators.required,
    // ]);
    //
    //
    // hide = true;

    initForm() {
        this.userForm = this.fb.group({
            username: '',
            password: '',
            verifyPassword: ''
        }, {
            validator: this.passwordValidator
        });
    }

    passwordValidator(form: FormGroup) {
        const condition = form.get('password').value !== form.get('verifyPassword').value;

        return condition ? {passwordsDoNotMatch: true} : null;
    }


    ngOnInit() {
    }


    // registerPatient() {
    //     console.log(this.patient);
    //     console.log(this.namePhoto = this.selectedFile.name);
    //     this.namePhoto = this.selectedFile.name;
    //     if (true) {
    //         console.log(22);
    //         // const strings = this.selectedFile.name.split('.');
    //         // const format = strings.pop();
    //         this.patient.image = /*'book-ang/src/assets/img' +*/ this.namePhoto/* + '.' + format*/;
    //         this.imageService.uploadImage(this.selectedFile, this.patient.image).subscribe(value => {
    //             console.log(value);
    //         });
    //     }
    //     this.patient.role = Role.ROLE_PATIENT;
    //     this.patientService.createPatient(this.patient).subscribe(value => {
    //         console.log(value);
    //     }, error => {
    //         if (error.status === 500) {
    //             console.log('errror');
    //         }
    //         console.log(error);
    //     });
    //     // this is login after you create user
    //     // this.loginService.loginUser(this.patient);
    //     console.log(this.patient);
    // }


    registerPatient() {
        console.log(this.patient);
        this.namePhoto = uuid();
        if (this.selectedFile != null) {
            const format = this.selectedFile.name.split('.').pop();
            this.patient.image = this.namePhoto + '.' + format;
            this.imageService.uploadImage(this.selectedFile, this.patient.image).subscribe(value => {
                console.log(value);
            });
        }
        // console.log(form.value.dateOfBirth);
        this.patient.dateOfBirth = moment(this.patient.dateOfBirth).format('YYYY-MM-DDT00:00:00.000') + 'Z';
        this.patient.role = Role.ROLE_PATIENT;
        this.patientService.createPatient(this.patient).subscribe(value => {
            console.log(value);
        }, error => {
            if (error.status === 500) {
                console.log('errror');
            }
            // console.log(error);
        });
        console.log(this.patient);
    }

    onFileSelected(event) {
        this.selectedFile = event.target.files[0];

    }

    getAllPatients() {
        this.patientService.getPatientsInfo().subscribe(value => {
            console.log(value);
        }, error => {
            if (error.status === 500) {
                console.log('error 500');
                window.alert(error.valueOf());
            }
        });
    }
}



