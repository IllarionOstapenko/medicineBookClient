import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


    constructor() {
    }

    ngOnInit() {
    }
}

