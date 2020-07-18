import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';


import { PublicRoutingModule } from './public-routing.module';
import { TrainingModule } from './training/training.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    TrainingModule,
    HomeModule
  ],
  exports: [
    TrainingModule
  ]
})
export class PublicModule { }
