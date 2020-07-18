import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TrainingService} from './core/service/training.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
