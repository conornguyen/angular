import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenseDefaultComponent } from './license-default/license-default.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { LicenseCreateComponent } from './license-create/license-create.component';


const routes: Routes = [
  {
    path: '',
    component: LicenseDefaultComponent,
    children: [
      {path: 'list', component: LicenseListComponent},
      {path: 'detail/:id', component: LicenseDetailComponent},
      {path:'add', component: LicenseCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenseManageRoutingModule { }
