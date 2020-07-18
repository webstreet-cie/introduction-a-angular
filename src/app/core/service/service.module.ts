import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {CategoryService} from './category.service';
import {TrainingService} from './training.service';


@NgModule({
  providers: [CategoryService,TrainingService],
  imports: [
    SharedModule
  ]
})
export class ServiceModule { }
