import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {


  booksUrl = 'http://localhost:3000/books/'
  constructor(private http: HttpClient) { }


  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
  // getBooks(): Observable<any> {
  //   return this.http.get<any>(this.booksUrl);
  // }

  // getBook(id: number): Observable<any>{
  //   return this.http.get<any>(this.booksUrl + id)
  // }

  // createBook(book: Book): Observable<any> {
  //   return this.http.post(this.booksUrl, book);
  // }

  // updateBook(id: number, value: any): Observable<Object> {
  //   return this.http.put(this.booksUrl + id, value);
  // }


  // deleteBook(id: number): Observable<any> {
  //   return this.http.delete(this.booksUrl + id);
  // }

}
