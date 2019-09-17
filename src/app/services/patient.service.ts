import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Patient} from '../models/patient';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
$patient = new Subject();
    constructor(private http: HttpClient) {
        this.$patient.next()
    }

    createPatient(patient: Patient): Observable<any> {
        // console.log(user + 'service');
        return this.http.post('http://localhost:8080/create/patient', patient);
    }

    getPatientsInfo(): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', localStorage.getItem('token'));
        console.log('headers' + headers);
        return this.http.get<any>('http://localhost:8080/patients', {headers});
    }


}
