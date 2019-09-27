import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { License } from './license';


@Injectable({
  providedIn: 'root'
})
export class LicenseService {


  licensesUrl = 'http://localhost:3000/license/'
  constructor(private http: HttpClient) { }


  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
  getLicenses(): Observable<any> {
    return this.http.get<any>(this.licensesUrl);
  }

  getLicense(id: number): Observable<any>{
    return this.http.get<any>(this.licensesUrl + id)
  }

  createLicense(license: License): Observable<any> {
    return this.http.post(this.licensesUrl, license);
  }

  // updateBook(id: number, value: any): Observable<Object> {
  //   return this.http.put(this.booksUrl + id, value);
  // }


  // deleteBook(id: number): Observable<any> {
  //   return this.http.delete(this.booksUrl + id);
  // }

}
