import {Component, OnInit} from '@angular/core';
import {User} from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  sadasdas: User;

  userArray = {};
  // isRegistrationPatientClicked = true;
  // isRegistrationDoctorClicked: boolean;
  // isRegistrationLaboratoryClicked: boolean;
  //
  //
  // registrationPatient() {
  //   // this.isRegistrationPatientClicked = !this.isRegistrationPatientClicked;
  //   this.isRegistrationPatientClicked = true;
  //   this.isRegistrationDoctorClicked = false;
  //   this.isRegistrationLaboratoryClicked = false;
  // }
  //
  // registrationDoctor() {
  //   this.isRegistrationDoctorClicked = !this.isRegistrationDoctorClicked;
  //   this.isRegistrationPatientClicked = false;
  //   this.isRegistrationLaboratoryClicked = false;
  // }
  //
  // registrationLaboratory() {
  //   this.isRegistrationLaboratoryClicked = !this.isRegistrationLaboratoryClicked;
  //   this.isRegistrationPatientClicked = false;
  //   this.isRegistrationDoctorClicked = false;
  // }

  ngOnInit(): void {
  }


  // return this.http.get(url, {
  //   headers: new HttpHeaders({'Authorization': 'Bearer ' + token})
// });
//   showPatients() {
  // const headers = new HttpHeaders();
  // headers.set({Authorization: localStorage.getItem('token')});
  // const headers = new HttpHeaders({Authorization: localStorage.getItem('token')});
  // return this.http.get('http://localhost:8080/patients', {headers}).subscribe(value => {
  //   console.log(value);
  // // });


  // return this.http.get<any>('http://localhost:8080/patients', {
  //   headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
  // });
  // }

  // return this.http.get<any>(`http://localhost:8080/showpp/${objType}`,
// {
// headers: new HttpHeaders({'Authorization': localStorage.getItem('_token')})
// });

  // test() {
  // // this.headerOption = new HttpHeaders({Authorization: localStorage.getItem('token')});
  // // const token = localStorage.getItem('token');
  // const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
  // this.http.get('http://localhost:8080/home', {headers}).subscribe(value => {
  //   console.log(value);
  // });
  //

  // test() {
  //   console.log('test working before');
  //   const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
  //   this.http.get('http://localhost:8080/home', {headers}).subscribe(value => {
  //     console.log(value);
  //   });
  //   console.log('test working after');
  // }

  /*new HttpHeaders({'Authorization': localStorage.getItem('token')})*/

  // getAllPatients() {
  //   this.roleService.getPatientsInfo().subscribe(value => {
  //     console.log(value);
  //   });
  // }

  // getAllDoctors() {
  //   this.roleService.getDoctorsInfo().subscribe(value => {
  //     console.log(value);
  //   });
  // }


//
//
//   console.log('show role patient working');
//   return this.http.get<any>(`http://localhost:8080/test`,
//     {
//       headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
//     });
// }
}
