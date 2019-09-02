import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {ImageService} from '../../services/image.service';
import {User} from '../../models/user/user';
import {FormControl, Validators} from '@angular/forms';
import * as uuid from 'uuid';

@Component({
  selector: 'app-registration-patient',
  templateUrl: './registration-patient.component.html',
  styleUrls: ['./registration-patient.component.css']
})
export class RegistrationPatientComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private imageService: ImageService) {
  }

  user: User = new User();
  selectedFile: File = null;

  namePhoto: any;
  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  confirmFormControl = new FormControl('', [
    Validators.required,
  ]);


  hide = true;


  // registerUser() {
  //   console.log(this.user);
  //   this.authenticationService.createUser(this.user).subscribe((res: User) => {
  //     console.log(res);
  //     console.log(this.user);
  //   });
  // }


  //
  // selectedFile = false;
  //
  // onFileSelected(event) {
  //   console.log(event);
  //   this.selectedFile = event.target.files[0];
  // }

  ngOnInit() {
  }

  registerUser() {
    this.namePhoto = uuid();
    if (this.selectedFile != null) {
      const strings = this.selectedFile.name.split('.');
      console.log(strings);
      if (this.user.image !== this.user.image) {
        this.namePhoto = uuid();
      }
      this.user.image = /*'book-ang/src/assets/img' +*/ this.namePhoto + '.' + strings[1];

      this.imageService.uploadImage(this.selectedFile, this.user.image).subscribe(value => {
        console.log(value);
      });
    }
    this.authenticationService.createUser(this.user).subscribe(value => {
      console.log(value);
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];

  }


}
