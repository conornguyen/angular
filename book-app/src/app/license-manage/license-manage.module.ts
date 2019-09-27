import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenseManageRoutingModule } from './license-manage-routing.module';
import { LicenseDefaultComponent } from './license-default/license-default.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { MaterialModule } from '../material/material.module';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { LicenseCreateComponent } from './license-create/license-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LicenseDefaultComponent, LicenseListComponent, LicenseDetailComponent, LicenseCreateComponent],
  imports: [
    CommonModule,
    LicenseManageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class LicenseManageModule { }
