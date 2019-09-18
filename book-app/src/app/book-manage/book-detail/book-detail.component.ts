import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MessageService } from 'src/app/message/message.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public bookForm: FormGroup;
  submitted = false;
  book: Book;
  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private formBuilder: FormBuilder,
    private messageService: MessageService
    ) { }

    
  id = + this.route.snapshot.paramMap.get('id');

  getBook() {
    return this.bookService.getBook(this.id)
      .subscribe(book => this.book = book);
  }

  ngOnInit() {
    this.getBook();
    this.createForm();
  }


 
  public hasError = (controlName: string, errorName: string) => {
    return this.bookForm.controls[controlName].hasError(errorName);
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      date:['', Validators.required ]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.bookForm)
    this.bookService.updateBook(this.id, this.bookForm.value).subscribe();
    this.messageService.addMessage({messageType: "success", messageDisplay: "Update Book Successful.!!!"});
  }


}
