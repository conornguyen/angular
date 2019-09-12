import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[]

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {

  }

  

}
