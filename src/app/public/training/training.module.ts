import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import { TrainingListComponent } from './training-list/training-list.component';



@NgModule({
  declarations: [TrainingListComponent],
  imports: [
    SharedModule
  ],
  exports: [
    TrainingListComponent
  ]
})
export class TrainingModule { }
