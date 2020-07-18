import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { TrainingModule } from './training/training.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    TrainingModule
  ],
  exports: [
    TrainingModule
  ]
})
export class PublicModule { }
