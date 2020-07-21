
import { PublicMenuComponent } from './public-menu/public-menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [FooterComponent,PublicMenuComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    FooterComponent,PublicMenuComponent
  ]
})
export class LayoutModule { }

