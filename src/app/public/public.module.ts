import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';


import { PublicRoutingModule } from './public-routing.module';
import { TrainingModule } from './training/training.module';
import { HomeModule } from './home/home.module';
import { SessionModule } from './session/session.module';
import { BlogModule } from './blog/blog.module';
import { SparePagesModule } from './spare-pages/spare-pages.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    TrainingModule,
    HomeModule,
    SessionModule,
    BlogModule,
    SparePagesModule,

  ],
  exports: [
    TrainingModule,
    SessionModule,
    HomeModule,

  ]
})
export class PublicModule { }
