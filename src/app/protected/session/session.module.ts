import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionListTrainerComponent } from './session-list-trainer/session-list-trainer.component';
import { SessionListParticipantComponent } from './session-list-participant/session-list-participant.component';
import { SessionUpdateComponent } from './session-update/session-update.component';
import { SessionCreateComponent } from './session-create/session-create.component';



@NgModule({
  declarations: [SessionListComponent, SessionListTrainerComponent, SessionListParticipantComponent, SessionUpdateComponent, SessionCreateComponent],
  imports: [
    CommonModule
  ]
})
export class SessionModule { }
