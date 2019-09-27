import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { MaterialModule } from '../material/material.module';
import { MessageComponent } from '../message/message.component';


@NgModule({
  declarations: [ManageComponent, MessageComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    MaterialModule
  ]
})
export class ManageModule { }
