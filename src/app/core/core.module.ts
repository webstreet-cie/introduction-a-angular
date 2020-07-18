import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule
  ],
  exports: [
    PublicModule,
    ProtectedModule
  ]
})
export class CoreModule { }
