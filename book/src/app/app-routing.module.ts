import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { LicenseManageComponent } from './license-manage/license-manage.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [
  {path: 'book-list', component: BookListComponent},
  {path: 'license', component: LicenseManageComponent},
  {path: 'add', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
