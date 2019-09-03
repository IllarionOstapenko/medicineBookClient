import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doctor} from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {
  }

  createDoctor(doctor: Doctor): Observable<any> {
    return this.http.post('http://localhost:8080/create/doctor', doctor);
  }


  getDoctorsInfo(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token'));
    console.log('headers' + headers);
    return this.http.get<any>('http://localhost:8080/doctors', {headers});
  }



}
