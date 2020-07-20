import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingUpdateComponent } from './training-update/training-update.component';
import { TrainingCreateComponent } from './training-create/training-create.component';



@NgModule({
  declarations: [TrainingListComponent, TrainingUpdateComponent, TrainingCreateComponent],
  imports: [
    CommonModule
  ]
})
export class TrainingModule { }
