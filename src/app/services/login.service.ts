import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login';
import {error} from 'util';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {
    }

    loginUser(user: Login) {
        console.log(user);
        return this.http.post('http://localhost:8080/login', user, {observe: 'response'}).subscribe(token => {
            console.log(token.headers.get('Authorization'));
            localStorage.setItem('token', token.headers.get('Authorization'));
        });

    }

}
