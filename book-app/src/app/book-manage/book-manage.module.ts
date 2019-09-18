import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookManageRoutingModule } from './book-manage-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MaterialModule } from '../material/material.module';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDefaultComponent } from './book-default/book-default.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BookListComponent, BookDetailComponent, BookCreateComponent, BookDefaultComponent,],
  imports: [
    CommonModule,
    BookManageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  
  ]

})
export class BookManageModule { }
