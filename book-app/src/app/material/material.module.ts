import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSortModule, MatTableModule, MatProgressBarModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule, MatSelectModule, } from '@angular/material'




@NgModule({

  imports: [
    CommonModule,

  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,

  ],
  declarations: []
})
export class MaterialModule { }
