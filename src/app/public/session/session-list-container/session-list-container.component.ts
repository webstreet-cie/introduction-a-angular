import { SessionService } from '../../../core/service/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-list-container',
  templateUrl: './session-list-container.component.html',
  styleUrls: ['./session-list-container.component.css']
})
export class SessionListContainerComponent implements OnInit {
  title = "Liste des sessions";
  //trainings is a table of object Training
  sessions;

  constructor(service: SessionService) { 
    this.sessions = service.getSessions();
  }

  getTitle() {
    return this.title;
  }

  ngOnInit(): void {
    console.log(this.sessions);
  }

}
