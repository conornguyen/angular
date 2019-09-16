import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }


  getBooks() {
    return ALL_BOOKS;
  }


}







const ALL_BOOKS: Book[] = [

  {
    "id": 1,
    "title": "Dadada",
    "author": "dudududu",
    "number": 15,
    "date": {
      "day": 15,
      "month": 12,
      "year": 2018
    }
  },
  {
    "id": 2,
    "title": "dfsdf",
    "author": "ffferwer",
    "number": 5,
    "date": {
      "day": 15,
      "month": 12,
      "year": 2018
    }
  },
  {
    "id": 3,
    "title": "wetwertdfgdfg",
    "author": "yuighgfhfghf",
    "number": 3,
    "date": {
      "day": 15,
      "month": 12,
      "year": 2018
    }
  },
  {
    "id": 4,
    "title": "6565d4ffe",
    "author": "qwqwsdfsf6566fw",
    "number": 40,
    "date": {
      "day": 15,
      "month": 12,
      "year": 2018
    }
  },
  {
    "id": 5,
    "title": "opoipkl;k;kcvx",
    "author": "d65464ududusdfsdfsdu",
    "number": 99,
    "date": {
      "day": 15,
      "month": 12,
      "year": 2018
    }
  }
];