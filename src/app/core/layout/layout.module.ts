import { PublicMenuComponent } from './public-menu/public-menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FooterComponent,PublicMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,PublicMenuComponent
  ]
})
export class LayoutModule { }

