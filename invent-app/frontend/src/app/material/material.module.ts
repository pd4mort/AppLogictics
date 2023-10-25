import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  exports: [
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }
