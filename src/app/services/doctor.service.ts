import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Doctor} from '../models/doctor';
import {Host} from '../enums/host';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {
    createDoctorURL = `${Host.API_URL}/create/doctor`;
    DoctorInfoURL = `${Host.API_URL}/doctors`;
    doctorSpecialityURL = `${Host.API_URL}/specialities`;
    getDoctorBySpecialityURL = `${Host.API_URL}/doctor/speciality`;

    // $listDoctors = new BehaviorSubject({});

    constructor(private http: HttpClient) {
    }


    // addListDoctors(value): any {
    //     this.$listDoctors.next(value);
    // }
    //
    // getListDoctors(): Observable<User> {
    //     return this.$listDoctors.asObservable();
    // }


    createDoctor(doctor: Doctor): Observable<any> {
        return this.http.post(this.createDoctorURL, doctor);
    }


    getDoctorsInfo(): Observable<any> {
        const headers = new HttpHeaders()
            .set('Authorization', localStorage.getItem('token'));
        console.log('headers' + headers);
        return this.http.get<any>(this.DoctorInfoURL, {headers});
    }

    getAllSpecialities(): Observable<string> {
        return this.http.get<string>(this.doctorSpecialityURL, {
            headers: new HttpHeaders(
                {'Authorization': localStorage.getItem('token')})
        });
    }


    getDoctorsBySpeciality(speciality): Observable<Doctor> {
        return this.http.get<Doctor>(this.getDoctorBySpecialityURL + `/${speciality}`, {
            headers: new HttpHeaders(
                {'Authorization': localStorage.getItem('token')}
            )
        });
    }


}
