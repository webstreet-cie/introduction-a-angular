
import { PublicMenuComponent } from './public-menu/public-menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';




@NgModule({
  declarations: [FooterComponent,PublicMenuComponent],
  imports: [
    SharedModule

  ],
  exports: [
    FooterComponent,PublicMenuComponent
  ]
})
export class LayoutModule { }

