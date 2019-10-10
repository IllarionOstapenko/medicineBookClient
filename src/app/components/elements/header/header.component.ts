import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';
import {User} from '../../../models/user';
import {Patient} from '../../../models/patient';
import {Doctor} from '../../../models/doctor';
import {Laboratory} from '../../../models/laboratory';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user: User;
    page: boolean;
    patient: Patient;
    doctor: Doctor;
    labolatory: Laboratory;

    constructor(private loginService: LoginService,
                private router: Router) {
    }

    ngOnInit() {
        this.loginService.auth().subscribe(value => {
            console.log(value);
            this.user = value;
            // @ts-ignore
            if (this.user.role === 'ROLE_PATIENT') {
                // @ts-ignore
                this.patient = value;
                // @ts-ignore
            } else if (this.user.role === 'ROLE_DOCTOR') {
                this.doctor = value;
                // @ts-ignore
            } else if (this.user.role === 'ROLE_LABORATORY') {
                this.labolatory = value;
            } else {
                return false;
            }
        });

    }

    logOut() {
        this.loginService.logOut();
    }

    myPage() {
        this.router.navigate(['/head/patient/myPage']);
        this.page = false;
    }

    recordToDoctor() {
        this.router.navigate(['/head/patient/record-to-doctor']);
    }

    historyAnalyzes() {
        this.router.navigate(['head/patient/historyAnalyzes']);
    }

    visitInDoctor() {
        this.router.navigate(['head/patient/visit-in-doctor']);
    }

    historyVisitsInDoctor() {
        this.router.navigate(['head/patient/visit-in-doctor/history-visits']);
    }

    futureVisitInDoctor() {
        this.router.navigate(['head/patient/visit-in-doctor/future-visits']);
    }

    receptionPatient() {
        this.router.navigate(['head/doctor/receptionPatient']);
    }

    workingCalendar() {
        this.router.navigate(['head/doctor/workingCalendar']);
    }

    historyReception() {
        this.router.navigate(['head/doctor/historyReception']);
    }


}
