import {Injectable} from '@angular/core';
import {Patient} from '../models/patient';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Laboratory} from '../models/laboratory';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  constructor(private http: HttpClient) {
  }

  createLaboratory(laboratory: Laboratory): Observable<any> {
    // console.log(user + 'service');
    return this.http.post('http://localhost:8080/create/laboratory', laboratory);
  }

  getLaboratoryInfo(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token'));
    console.log('headers' + headers);
    return this.http.get<any>('http://localhost:8080/laboratories', {headers});
  }
}
