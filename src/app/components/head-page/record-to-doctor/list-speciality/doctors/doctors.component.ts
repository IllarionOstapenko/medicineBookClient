import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../../../../models/doctor';
import {DoctorService} from '../../../../../services/doctor.service';
import {ActivatedRoute} from '@angular/router';
import {VisitToDoctor} from '../../../../../models/visitToDoctor';
import {LoginService} from '../../../../../services/login.service';
import {PatientService} from '../../../../../services/patient.service';
import {VisitToDoctorService} from '../../../../../services/visit-to-doctor.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
    doctors: Doctor;
    currentUser;

    visitToDoctor: VisitToDoctor = new VisitToDoctor();

    // timeOfVisit: VisitToDoctor = [];
    visits;
    times: string [] = ['9:00', '10:00', '11:00', '12:00', '14:00', '15:00'];

    constructor(private doctorService: DoctorService,
                private activatedRoute: ActivatedRoute,
                private loginService: LoginService,
                // private patientService: PatientService,
                private visitToDoctorService: VisitToDoctorService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((value) => {
            this.doctorService.getDoctorsBySpeciality(value.speciality).subscribe(doc => {
                this.doctors = doc;
            });
        });
    }


    reservationDate(form: NgForm, doctorId) {
        this.visitToDoctor.dateOfVisit = form.value.dateOfVisit;
        this.visitToDoctor.timeOfVisit = form.value.timeOfVisit;
        console.log(this.visitToDoctor);
        this.visitToDoctorService.createVisitToDoctor(this.visitToDoctor, doctorId).subscribe(value => {
            console.log(value);
        });


    }

    getAllVisits() {
        this.visitToDoctorService.getAllVisits().subscribe(value => {
            console.log(value);
            this.visits = value;
        });

    }
}
