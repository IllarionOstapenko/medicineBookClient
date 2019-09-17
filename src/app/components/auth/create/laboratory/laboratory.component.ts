import {Component, OnInit} from '@angular/core';
import {Role} from '../../../../models/role';
import {Laboratory} from '../../../../models/laboratory';
import {FormControl, Validators} from '@angular/forms';
import {LaboratoryService} from '../../../../services/laboratory.service';
import {LoginService} from '../../../../services/login.service';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {
  laboratory: Laboratory = new Laboratory();
  selectedFile: File = null;

  namePhoto: any;
  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  confirmFormControl = new FormControl('', [
    Validators.required,
  ]);


  hide = true;


  constructor(private laboratoryService: LaboratoryService,
              private loginService: LoginService,
              ) {
  }

  ngOnInit() {
  }

  registerLaboratory() {
    console.log(this.laboratory);
    // this.namePhoto = uuid();
    // if (this.selectedFile != null) {
    //   const strings = this.selectedFile.name.split('.');
    //   const format = strings.pop();
    // this.laboratory.image = /*'book-ang/src/assets/img' +*/ this.namePhoto + '.' + format;
    // this.imageService.uploadImage(this.selectedFile, this.laboratory.image).subscribe(value => {
    //   console.log(value);
    // });
    // }
    this.laboratory.role = Role.ROLE_LABORATORY;
    this.laboratoryService.createLaboratory(this.laboratory).subscribe(value => {
      console.log(value);
    }, error => {
      if (error.status === 500) {
        console.log('errror');
      }
      // console.log(error);
    });
    this.loginService.loginUser(this.laboratory);
    console.log(this.laboratory);
  }

  getAllLaboratories() {
    this.laboratoryService.getLaboratoryInfo().subscribe(value => {
      console.log(value);
    }, error => {
      if (error.status === 500) {
        console.log('error 500');
      }
    });

  }
}
