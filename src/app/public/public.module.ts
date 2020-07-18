import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';


import { PublicRoutingModule } from './public-routing.module';
import { TrainingModule } from './training/training.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    TrainingModule
  ],
  exports: [
    TrainingModule
  ]
})
export class PublicModule { }
