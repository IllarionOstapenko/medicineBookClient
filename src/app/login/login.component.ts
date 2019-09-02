import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../models/user';
import {LoginService} from '../services/login.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user: User = new User();
  hide = true;
  userLog: Login = new Login();
  response = new Response();
  error = new HttpErrorResponse({});

  constructor(private loginService: LoginService) {
  }

  passFormControl = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit() {
  }

  loginUser() {
    this.loginService.loginUser(this.userLog);
    if (this.response.status === 200) {
      console.log('login component');
    } else if (this.error.status === 403) {
      console.log('login component don\'t  work');
    }
    console.log('login component isn\'t work');
  }
}


