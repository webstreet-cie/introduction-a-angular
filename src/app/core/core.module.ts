import { NgModule, Optional, SkipSelf } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { ServiceModule } from './service/service.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicModule,
    ProtectedModule,
    ServiceModule
  ],
  exports: [
    PublicModule,
    ProtectedModule
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) { 
     if (parentModule) { 
     throw new Error('CoreModule is already loaded.'); 
     } 
   } 
 }
