import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token'));
    console.log('headers' + headers);
    return this.http.get<any>('http://localhost:8080/patients', {headers});
  }

  getPatientsInfo(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token'));
    console.log('headers' + headers);
    return this.http.get<any>('http://localhost:8080/patients', {headers});
  }
}
