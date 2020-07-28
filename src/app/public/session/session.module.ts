import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionListContainerComponent } from './session-list-container/session-list-container.component';



@NgModule({
  declarations: [SessionDetailComponent, SessionListComponent],
  imports: [
    SharedModule
  ],
  exports: [
    SessionListComponent,
    SessionDetailComponent
  ]
})
export class SessionModule { }
