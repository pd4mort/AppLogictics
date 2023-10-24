import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';


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
  ],
  exports: [
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
