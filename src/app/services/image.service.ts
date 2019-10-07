import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Host} from '../enums/host';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    addPhotoURL = `${Host.API_URL}/addPhoto`;

    constructor(private http: HttpClient) {
    }

    // uploadImage(file: File, uuid): Observable<any> {
    //   const formData = new FormData();
    //   formData.append('image', file, uuid);
    //   return this.http.post('http://localhost:8080/create/user/photo', formData);
    // }
    // uploadImage(file: File, uuid): Observable<any> {
    //   const formData = new FormData();
    //   formData.append('image', file, uuid);
    //   return this.http.post('http://localhost:8080/create/user/photo', formData);
    // }

    uploadImage(file: File, uuid): Observable<any> {
        const formData = new FormData();
        formData.append('image', file, uuid);
        return this.http.post(this.addPhotoURL, formData);
    }
}

