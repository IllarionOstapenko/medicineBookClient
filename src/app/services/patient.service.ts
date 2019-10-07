import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Patient} from '../models/patient';
import {Host} from '../enums/host';
import {Doctor} from '../models/doctor';

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    createPatientURL = `${Host.API_URL}/create/patient`;
    patientInfoURL = `${Host.API_URL}/patients`;


    constructor(private http: HttpClient) {
    }

    createPatient(patient: Patient): Observable<any> {
        // console.log(user + 'service');
        return this.http.post(this.createPatientURL, patient);
    }

    getPatientsInfo(): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', localStorage.getItem('token'));
        console.log('headers' + headers);
        return this.http.get<any>(this.patientInfoURL, {headers});
    }
}
