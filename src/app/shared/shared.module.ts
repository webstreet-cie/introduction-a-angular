
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from './partials/partials.module';
//import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PartialsModule,
   // RouterModule
  ],
  exports: [
    CommonModule,
    PartialsModule,
    //RouterModule
  ]
})
export class SharedModule { }
