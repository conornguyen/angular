import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage.component';

const routes: Routes = [{
  path: '', component: ManageComponent,
  children: [
    { path: 'book-manage', loadChildren: () => import('../book-manage/book-manage.module').then(m => m.BookManageModule) },
    { path: 'license-manage', loadChildren: () => import('../license-manage/license-manage.module').then(m => m.LicenseManageModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
