import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Patient} from '../models/patient';
import {Host} from '../enums/host';
import {Doctor} from '../models/doctor';
import {VisitToDoctor} from '../models/visitToDoctor';
import {LoginService} from './login.service';

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    createPatientURL = `${Host.API_URL}/create/patient`;
    patientInfoURL = `${Host.API_URL}/patients`;
    visitToDoctorURL = `${Host.API_URL}/create/visit`;
    getAllVisitsURL = `${Host.API_URL}/getAllVisits`;

    constructor(private http: HttpClient,
                private loginService: LoginService) {
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

    // createVisitToDoctor(visitToDoctor, doctorId) {
    //     return this.http.post(`${this.visitToDoctorURL}&doctor=${doctorId}&patient=${this.loginService.userDataSource.getValue().id}`,
    //         visitToDoctor);
    // }
    //
    // getAllVisits() {
    //     return this.http.get(this.getAllVisitsURL, {
    //         headers: new HttpHeaders(
    //             {'Authorization': localStorage.getItem('token')})
    //     });
    // }

}



