import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import {Patient} from '../../models/patient';
import {Doctor} from '../../models/doctor';
import {Laboratory} from '../../models/laboratory';
import {PatientService} from '../../services/patient.service';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-head-page',
    templateUrl: './head-page.component.html',
    styleUrls: ['./head-page.component.css']
})
export class HeadPageComponent implements OnInit {

    user: User;

    constructor(private loginService: LoginService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        // this.activatedRoute.queryParamMap.subscribe((params: any) => {
        //     console.log('here1');
        //     console.log(params);
        //     console.log(params.userAlreadyLogin);
        if (localStorage.getItem('token')) {
            this.loginService.auth().subscribe(value => {
                this.user = value;
                this.loginService.addCurrentUser(value);
                console.log('here');

                // @ts-ignore
                if (this.user.role === 'ROLE_PATIENT') {
                    this.router.navigate(['head/patient/myPage']);
                } else if (
                    // @ts-ignore
                    this.user.role === 'ROLE_DOCTOR') {
                    this.router.navigate(['head/doctor']);
                } else if (
                    // @ts-ignore
                    this.user.role === 'ROLE_LABORATORY') {
                    this.router.navigate(['head/laboratory']);

                }
            });
        }
        // });

    }
}
