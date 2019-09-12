import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  
 
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private bookUrl = 'http://localhost:3000/books'


  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.bookUrl}`);
  }

  getBook(id: number): Observable<any> {
    return this.http.get(`${this.bookUrl}/${id}`);
  }

}
