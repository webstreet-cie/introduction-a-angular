import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionListCardComponent } from './session-list-card/session-list-card.component';
import { SessionListContainerComponent } from './session-list-container/session-list-container.component';



@NgModule({
  declarations: [SessionDetailComponent, SessionListComponent, SessionListCardComponent, SessionListContainerComponent],
  imports: [
    SharedModule
  ],
  exports: [
    SessionListComponent,
    SessionListCardComponent
  ]
})
export class SessionModule { }
