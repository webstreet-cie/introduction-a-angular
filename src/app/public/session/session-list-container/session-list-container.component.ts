import { SessionService } from '../../../core/service/session.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-session-list-container',
  templateUrl: './session-list-container.component.html',
  styleUrls: ['./session-list-container.component.css']
})
export class SessionListContainerComponent{
  
  //trainings is a table of object Training
  sessions;
  //private defaultNumberOfSessions;
  @Input() numberOfSessions;

  constructor(service: SessionService) { 
    this.sessions = service.getSessions();
    this.numberOfSessions = this.sessions.length;
    console.log(this.numberOfSessions);
  }

}
