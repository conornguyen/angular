import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage.component';

const routes: Routes = [{
  path: '', component: ManageComponent,
  children: [
    { path: 'book-manage', loadChildren: () => import('../book-manage/book-manage.module').then(m => m.BookManageModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
