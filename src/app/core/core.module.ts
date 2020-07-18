import { NgModule, Optional, SkipSelf } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { ServiceModule } from './service/service.module';
import { PublicMenuComponent } from './layout/public-menu/public-menu.component';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [PublicMenuComponent, FooterComponent],
  imports: [
    SharedModule,
    PublicModule,
    ProtectedModule,
    ServiceModule
  ],
  exports: [
    PublicModule,
    ProtectedModule,
    PublicMenuComponent,
    FooterComponent
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) { 
     if (parentModule) { 
     throw new Error('CoreModule is already loaded.'); 
     } 
   } 
 }
