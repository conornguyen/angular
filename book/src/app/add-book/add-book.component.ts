import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { Location } from '@angular/common';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  book: Book = new Book();

  submitted = false;
 
  constructor(private location: Location,
    private bookService: BookService) {
  }
  ngOnInit() {
  }

  
  goBack(): void {
    this.location.back();
  }


  add() {
    this.bookService.newBook(this.book)
      .subscribe();
  }

  onSubmit() {
    this.submitted = true;
    this.add();    
  }


}
