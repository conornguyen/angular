import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(private route: ActivatedRoute,
    private bookService: BookService, ) { }

    
  id = + this.route.snapshot.paramMap.get('id');

  getBook() {
    return this.bookService.getBook(this.id)
      .subscribe(book => this.book = book);
  }

  ngOnInit() {
    this.getBook();
  }



}
