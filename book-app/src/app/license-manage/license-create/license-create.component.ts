import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LicenseService } from '../license.service';
import { Location } from '@angular/common';
import { BookService } from 'src/app/book-manage/book.service';
import { Book } from 'src/app/book-manage/book';

@Component({
  selector: 'app-license-create',
  templateUrl: './license-create.component.html',
  styleUrls: ['./license-create.component.scss']
})
export class LicenseCreateComponent implements OnInit {
  public licenseForm: FormGroup;
  submitted = false;
  books: any =[];

  constructor(private location: Location, private formBuilder: FormBuilder, private licenseService: LicenseService,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.createForm();

  }
  public hasError = (controlName: string, errorName: string) => {
    return this.licenseForm.controls[controlName].hasError(errorName);
  }

  goBack(): void {
    this.location.back();
  
  }



  createForm() { 
    this.licenseForm = this.formBuilder.group({
      book: ['', Validators.required],
      number: [],
      from: ['', Validators.required],
      to: ['', Validators.required],

    });
  }


  // setFormData() {
  //   this.bookService.getBook(this.id).subscribe(item => {
  //     if (item) {
  //       this.bookForm.setValue({
  //         title: item.title,
  //         author: item.author,
  //         number: item.number,
  //         date: item.date,
  //       });
  //     }
  //   });

  // }




  onSubmit(): void {
    this.submitted = true;
    this.licenseService.createLicense(this.licenseForm.value).subscribe(data => {
      this.location.back();
    }
    );
  
  }





















}
