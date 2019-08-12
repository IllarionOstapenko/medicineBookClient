import {Component, OnInit} from '@angular/core';
import {User} from '../models/user/user';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    console.log('on register component');
  }

  registerUser() {
    console.log(this.user + 'component');
    this.authenticationService.createUser(this.user);
    console.log(this.user);
  }


  // registerUser() {
  //   console.log(this.user);
  //   this.authenticationService.createUser(this.user).subscribe((res: User) => {
  //     console.log(res);
  //     console.log(this.user);
  //   });
  // }
}
