import { SessionListCardComponent } from './../public/session/session-list-card/session-list-card.component';
import { SessionListContainerComponent } from './../public/session/session-list-container/session-list-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from './partials/partials.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SessionListContainerComponent, SessionListCardComponent],
  imports: [
    CommonModule,
    PartialsModule,
   RouterModule
  ],
  exports: [
    CommonModule,
    PartialsModule,
    RouterModule,
    SessionListContainerComponent,
    SessionListCardComponent
  ]
})
export class SharedModule { }
