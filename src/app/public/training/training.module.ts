import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';



@NgModule({
  declarations: [TrainingListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TrainingListComponent
  ]
})
export class TrainingModule { }
