import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../models/login';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {map} from 'rxjs/operators';
import {Host} from '../enums/host';


@Injectable({
    providedIn: 'root'
})


export class LoginService {
    authURL = `${Host.API_URL}/authUser`;
    loginURL = `${Host.API_URL}/login`;
    private user: User;
    // $patient = new Subject<any>();


    userDataSource = new BehaviorSubject<any>({});


    constructor(private http: HttpClient,
                private router: Router) {
    }

    addCurrentUser(value): any {
        if (localStorage.getItem('token') == null) {
            this.userDataSource = null;
        }
        this.userDataSource.next(value);
    }

    getCurrentUser(): Observable<User> {
        return this.userDataSource.asObservable();
    }


    auth(): Observable<any> {
        return this.http.get<any>(this.authURL, {
            headers: new HttpHeaders(
                {'Authorization': localStorage.getItem('token')})
        });
    }


    // updateUserData(data) {
    //     this.userDataSource.next(data);
    // }
    //
    // addData(dataObj) {
    //     const currentValue = this.userDataSource.value;
    //     const updatedValue = [...currentValue, dataObj];
    //     this.userDataSource.next(updatedValue);
    // }


    loginUser(user: Login) {
        console.log(user);
        return this.http.post(this.loginURL, user, {observe: 'response'}).pipe(map((value: any) => {
            // console.log('---------------------');
            // console.log(user);
            // console.log(value);
            // console.log('---------------------');
            // this.user = value;
            return value;
        }));

    }

    logOut() {
        localStorage.removeItem('token');
        this.router.navigate(['']);
    }

    // test() {
    //     // @ts-ignore
    //     this.userDetails = this.auth();
    //     this.userDetails.subscribe(value => {
    //         console.log(value);
    //     });
    // }


    // auth(): Observable<any> {
    //     const headers = new HttpHeaders({'Authorization': localStorage.getItem('token')});
    //     return this.http.get<any>(this.authURL, {headers});
    // }

    // auth(): Observable<any> {
    //     return this.http.get<any>(this.authURL, {
    //         headers: new HttpHeaders(
    //             {'Authorization': localStorage.getItem('token')})
    //     });
    // }

    addPageIndexParams(partUrl, param) {
        this.router.navigate([partUrl], {
            queryParams: {
                userAlreadyLogin: param
            },
            queryParamsHandling: 'merge',
        });
    }

}
