import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';



@NgModule({
  declarations: [TrainingListComponent, TrainingDetailComponent],
  imports: [
    SharedModule
  ],
  exports: [
    TrainingListComponent
  ]
})
export class TrainingModule { }
