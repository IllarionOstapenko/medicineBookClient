import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../../../models/user';
import {LoginService} from '../../../services/login.service';
import {Login} from '../../../models/login';
import {Router} from '@angular/router';
import {Patient} from '../../../models/patient';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    hide = true;
    userLog: Login = new Login();
    user: User;
    patient: Patient;

    constructor(private loginService: LoginService) {
    }

    passFormControl = new FormControl('', [
        Validators.required,
    ]);

    ngOnInit() {
    }

    loginUser() {
        this.loginService.loginUser(this.userLog).subscribe(token => {
            // localStorage.setItem('user', token.headers.get('Test'));
            localStorage.setItem('token', token.headers.get('Authorization'));
            this.loginService.addPageIndexParams('head', 'true');
        });
    }
}
