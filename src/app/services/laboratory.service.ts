import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Laboratory} from '../models/laboratory';
import {Host} from '../enums/host';

@Injectable({
    providedIn: 'root'
})
export class LaboratoryService {

    createLaboratoryURL = `${Host.API_URL}/create/laboratory`;
    LaboratoryInfoURL = `${Host.API_URL}/laboratories`;

    constructor(private http: HttpClient) {
    }

    createLaboratory(laboratory: Laboratory): Observable<any> {
        // console.log(user + 'service');
        return this.http.post(this.createLaboratoryURL, laboratory);
    }

    getLaboratoryInfo(): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', localStorage.getItem('token'));
        console.log('headers' + headers);
        return this.http.get<any>(this.LaboratoryInfoURL, {headers});
    }
}
