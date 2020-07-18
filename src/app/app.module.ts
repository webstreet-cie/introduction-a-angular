import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TrainingsService} from './services/training.service';


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
  providers: [TrainingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
