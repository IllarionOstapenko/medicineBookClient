import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../models/login';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    authURL = 'http://localhost:8080/authUser';
    loginUrl = 'http://localhost:8080/login';
    private user: User;

    constructor(private http: HttpClient,
                private router: Router) {
    }


    loginUser(user: Login) {
        console.log(user);
        return this.http.post(this.loginUrl, user, {observe: 'response'}).pipe(map((p: any) => {
            console.log(p);
            this.user = p;

            return p;
        }));

    }

    logOut() {
        localStorage.removeItem('token');
        this.router.navigate(['']);
    }

    getLocalUser() {
        return this.user;
    }

    auth(): Observable<any> {
        const headers = new HttpHeaders({'Authorization': localStorage.getItem('token')});
        return this.http.get<any>(this.authURL, {headers});
    }

    addPageIndexParams(partUrl, param) {
        this.router.navigate([partUrl], {
            queryParams: {
                userAlreadyLogin: param
            },
            queryParamsHandling: 'merge',
        });
    }

}
