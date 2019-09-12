import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookManageRoutingModule } from './book-manage-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [BookListComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BookManageRoutingModule
  ]
})
export class BookManageModule { }
