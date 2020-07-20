import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeATrainerComponent } from './become-atrainer/become-atrainer.component';
import { CartComponent } from './cart/cart.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ConfidentialityComponent } from './confidentiality/confidentiality.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [BecomeATrainerComponent, CartComponent, ConnexionComponent, RegistrationComponent, ForgottenPasswordComponent, AboutComponent, ContactComponent, SitemapComponent, ConditionsComponent, ConfidentialityComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class SparePagesModule { }
