import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'book-list', pathMatch: 'full'},
  {path: 'book-list', component: BookListComponent},
  {path: 'detail/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookManageRoutingModule { }
