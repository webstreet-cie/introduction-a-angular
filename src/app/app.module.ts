import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TrainingsService} from './services/training.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TrainingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
