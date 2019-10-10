import {Injectable} from '@angular/core';
import {Host} from '../enums/host';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable({
    providedIn: 'root'
})
export class VisitToDoctorService {

    visitToDoctorURL = `${Host.API_URL}/create/visit`;
    getAllVisitsURL = `${Host.API_URL}/getAllVisits`;
    getByPatientIdURL = `${Host.API_URL}/getByPatientId`;
    findAllByDateOfVisitURL = `${Host.API_URL}/findAllByDateOfVisit`;

    constructor(private http: HttpClient,
                private loginService: LoginService) {
    }

    createVisitToDoctor(visitToDoctor, doctorId) {
        return this.http.post(`${this.visitToDoctorURL}&doctor=${doctorId}&patient=${this.loginService.userDataSource.getValue().id}`,
            visitToDoctor);
    }

    getAllVisits() {
        return this.http.get(this.getAllVisitsURL, {
            headers: new HttpHeaders(
                {'Authorization': localStorage.getItem('token')})
        });
    }

    getAllVisitsByPatientId() {
        // console.log(this.loginService.userDataSource.getValue().id);
        return this.http.get(`${this.getByPatientIdURL}&patient=${this.loginService.userDataSource.getValue().id}`);
    }



}
