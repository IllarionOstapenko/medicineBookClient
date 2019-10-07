import {Component, Input, OnInit, Output} from '@angular/core';
import {HeadPageComponent} from '../head-page.component';
import {Patient} from '../../../models/patient';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../../services/login.service';
import {take} from 'rxjs/operators';


@Component({
    selector: 'app-my-page',
    templateUrl: './my-page.component.html',
    styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
    patient: any;

    constructor(private activatedRoute: ActivatedRoute,
                private loginService: LoginService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.loginService.getCurrentUser().subscribe(value => {
                this.patient = value;
            });
        }, 10);
    }


}
