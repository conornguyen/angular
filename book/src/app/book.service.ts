import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Book} from './model/book';
import { Observable, of  } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookUrl = "http://localhost:3000/book"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  newBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.bookUrl}`, book);
  }


  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.bookUrl}`);
  }

}
