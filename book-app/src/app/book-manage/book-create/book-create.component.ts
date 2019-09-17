import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
import { Book } from '../book';




export interface BookForCreation {
  title: string;
  author: string;
}


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  public bookForm: FormGroup;
  submitted = false;
  book: Book = new Book();



  constructor(private location: Location, private formBuilder: FormBuilder,
    private bookService: BookService) { }

  ngOnInit() {
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
    });
  }

  


  onSubmit() {
    this.submitted = true;
    console.log(this.bookForm.value);
  }




}
