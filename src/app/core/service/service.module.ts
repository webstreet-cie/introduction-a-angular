import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryService} from './category.service';
import {TrainingService} from './training.service';


@NgModule({
  providers: [CategoryService,TrainingService],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
