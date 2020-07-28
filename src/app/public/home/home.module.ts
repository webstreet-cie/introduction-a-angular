import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SessionFeaturesComponent } from './session-features/session-features.component';
import { BlogFeaturesComponent } from './blog-features/blog-features.component';
import { SessionFeaturesCardComponent } from './session-features-card/session-features-card.component';
import { BlogFeaturesCardComponent } from './blog-features-card/blog-features-card.component';
import { TrainingCarouselComponent } from './training-carousel/training-carousel.component';
import { TrainingCardDeckComponent } from './training-card-deck/training-card-deck.component';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, SessionFeaturesComponent, BlogFeaturesComponent, SessionFeaturesCardComponent, BlogFeaturesCardComponent, TrainingCarouselComponent, TrainingCardDeckComponent],
  imports: [
   SharedModule

  ],
  exports: [
   
  ]
})
export class HomeModule { }
