import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { ServiceModule } from './service/service.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule,
    ServiceModule
  ],
  exports: [
    PublicModule,
    ProtectedModule
  ]
})
export class CoreModule { }
