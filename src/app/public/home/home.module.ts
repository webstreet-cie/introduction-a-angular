import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SessionFeaturesComponent } from './session-features/session-features.component';
import { BlogFeaturesComponent } from './blog-features/blog-features.component';
import { SessionFeaturesCardComponent } from './session-features-card/session-features-card.component';
import { BlogFeaturesCardComponent } from './blog-features-card/blog-features-card.component';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, SessionFeaturesComponent, BlogFeaturesComponent, SessionFeaturesCardComponent, BlogFeaturesCardComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
