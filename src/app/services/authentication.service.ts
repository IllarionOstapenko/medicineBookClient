import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Patient} from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  // createPatient(user: User): Observable<any> {
  //   // console.log(user + 'service');
  //   return this.http.post('http://localhost:8080/create/patient', user);
  // }
  createPatient(patient: Patient): Observable<any> {
    // console.log(user + 'service');
    return this.http.post('http://localhost:8080/create/patient', patient);
  }
}
