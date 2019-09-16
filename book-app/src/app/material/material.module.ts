import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatSortModule, MatTableModule,  } from '@angular/material'

const MaterialComponents = [
   MatButtonModule, MatSortModule, MatTableModule, 
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
