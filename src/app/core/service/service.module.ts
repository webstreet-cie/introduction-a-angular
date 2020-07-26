import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {CategoryService} from './category.service';
import {TrainingService} from './training.service';
import { SessionService } from './session.service';
import { BlogService } from './blog.service';



@NgModule({
  providers: [CategoryService,TrainingService,SessionService,BlogService],
  imports: [
    SharedModule
  ]
})
export class ServiceModule { }
