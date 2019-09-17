import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'license-manage', loadChildren: () => import('./license-manage/license-manage.module').then(m => m.LicenseManageModule) },
  { path: 'admin', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
