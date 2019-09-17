import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDefaultComponent } from './book-default/book-default.component';



const routes: Routes = [{
  path: '',
  component: BookDefaultComponent,
  children: [

    { path: 'book-list', component: BookListComponent },
    { path: 'detail/:id', component: BookDetailComponent },
    { path: 'add', component: BookCreateComponent },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookManageRoutingModule { }
