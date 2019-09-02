import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDoctorService {

  constructor(private http: HttpClient) {
  }

  createDoctor(user: User): Observable<any> {
    return this.http.post('http://localhost:8080/create/doctor', user);
  }
}
