import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from './partials/partials.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PartialsModule
  ],
  exports: [
    CommonModule,
    PartialsModule
  ]
})
export class SharedModule { }
