import {Component, OnInit} from '@angular/core';
import {HeadPageComponent} from '../head-page.component';
import {Patient} from '../../../models/patient';

@Component({
    selector: 'app-my-page',
    templateUrl: './my-page.component.html',
    styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
    patient: Patient;


    constructor(private firsPage: HeadPageComponent) {
    }

    ngOnInit() {
        this.patient = this.firsPage.patient;

    }


}
