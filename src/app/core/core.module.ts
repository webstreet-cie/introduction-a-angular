import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module'; 
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { ServiceModule } from './service/service.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    // Importer le SharedModule plutôt que le CommonModule : 
    SharedModule,
    PublicModule,
    ProtectedModule,
    ServiceModule,
    LayoutModule
  ],
  exports: [
    PublicModule,
    ProtectedModule,
    LayoutModule
  ]
})
export class CoreModule { 
 constructor(@Optional() @SkipSelf() parentModule: CoreModule) { 
    if (parentModule) { 
    throw new Error('CoreModule is already loaded.'); 
    } 
  } 
}
