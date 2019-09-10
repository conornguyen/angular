import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  date
  books: Book[];
  constructor(private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(book => this.books = book);

  }

  ngOnInit() {
    this.getBooks();
  }



}
