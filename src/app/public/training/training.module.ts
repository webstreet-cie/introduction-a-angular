import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';


import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { TrainingListCardComponent } from './training-list-card/training-list-card.component';
import { TrainingListContainerComponent } from './training-list-container/training-list-container.component';



@NgModule({
  declarations: [TrainingListComponent, TrainingDetailComponent, TrainingListCardComponent, TrainingListContainerComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    TrainingListComponent
  ]
})
export class TrainingModule { }
