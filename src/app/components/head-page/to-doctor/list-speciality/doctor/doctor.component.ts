import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Speciality} from '../../../../../enums/speciality';
import {Doctor} from '../../../../../models/doctor';
import {PatientService} from '../../../../../services/patient.service';
import {DoctorService} from '../../../../../services/doctor.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
    // doctor: Doctor;

    // @Input() doctors: Doctor;
    @Output() outputDoctor = new EventEmitter();

    doctors: Doctor;
    url;
    specialities: string;

    constructor(private doctorService: DoctorService,
                private activatedRoute: ActivatedRoute) {
        // this.url = this.activatedRoute.snapshot;
        // console.log(this.url);
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((value) => {
            console.log('_________________');
            console.log(value);
            console.log(value.speciality);
            console.log('_________________');
            // @ts-ignore
            // this.specialities = value;
            // @ts-ignore
            // this.doctors.speciality = value;
            this.doctorService.getDoctorsBySpeciality(value.speciality).subscribe(doc => {
                console.log('****************8');
                console.log(doc);
                console.log('****************8');
                this.doctors = doc;
            });
        });

        // console.log('*************************');
        // this.doctors = this.doctorService.getListDoctors();
        // console.log('*************************');

    }


    // getDoctorsBySpeciality(speciality) {
    //     this.doctorService.getDoctorsBySpeciality(speciality).subscribe(value => {
    //         console.log(value);
    //         // @ts-ignore
    //         this.doctors = value;
    //     });
    // }

    someAction() {
        this.outputDoctor.emit();
    }


}
