import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../models/user';
import {LoginService} from '../services/login.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../models/login';
import {error} from 'util';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    hide = true;
    userLog: Login = new Login();
    userLogin = false;

    constructor(private loginService: LoginService) {
    }

    passFormControl = new FormControl('', [
        Validators.required,
    ]);

    ngOnInit() {
    }

    loginUser() {
        this.loginService.loginUser(this.userLog);
        if (status === '200') {
            this.userLogin = true;
        }
    }
}


