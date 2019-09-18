import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksUrl = 'http://localhost:3000/books/'
  constructor(private http: HttpClient) { }


  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
  getBooks(): Observable<any> {
    return this.http.get<any>(this.booksUrl);
  }

  getBook(id: number): Observable<any>{
    return this.http.get<any>(this.booksUrl + id)
  }

  createBook(book: Object): Observable<Object> {
    return this.http.post(this.booksUrl, book);
  }

  updateBook(id: number, value: any): Observable<Object> {
    return this.http.put(this.booksUrl + id, value);
  }


  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.booksUrl+ id);
  }



}

































// const ALL_BOOKS: Book[] = [

//   {
//     "id": 1,
//     "title": "Dadada",
//     "author": "dudududu",
//     "number": 15,
//     "date": {
//       "day": 15,
//       "month": 12,
//       "year": 2018
//     }
//   },
//   {
//     "id": 2,
//     "title": "dfsdf",
//     "author": "ffferwer",
//     "number": 5,
//     "date": {
//       "day": 15,
//       "month": 12,
//       "year": 2018
//     }
//   },
//   {
//     "id": 3,
//     "title": "wetwertdfgdfg",
//     "author": "yuighgfhfghf",
//     "number": 3,
//     "date": {
//       "day": 15,
//       "month": 12,
//       "year": 2018
//     }
//   },
//   {
//     "id": 4,
//     "title": "6565d4ffe",
//     "author": "qwqwsdfsf6566fw",
//     "number": 40,
//     "date": {
//       "day": 15,
//       "month": 12,
//       "year": 2018
//     }
//   },
//   {
//     "id": 5,
//     "title": "opoipkl;k;kcvx",
//     "author": "d65464ududusdfsdfsdu",
//     "number": 99,
//     "date": {
//       "day": 15,
//       "month": 12,
//       "year": 2018
//     }
//   }
// ];