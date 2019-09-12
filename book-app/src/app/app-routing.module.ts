import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  {path: 'book-manage',  loadChildren: () => import('./book-manage/book-manage.module').then(mod => mod.BookManageModule)},
  {path: 'license-manage',  loadChildren: () => import('./license-manage/license-manage.module').then(mod => mod.LicenseManageModule)},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
