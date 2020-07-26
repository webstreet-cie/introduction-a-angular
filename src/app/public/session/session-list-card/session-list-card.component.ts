import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-list-card',
  templateUrl: './session-list-card.component.html',
  styleUrls: ['./session-list-card.component.css']
})
export class SessionListCardComponent  {

  
  @Input() session;


  constructor(private route: ActivatedRoute) { }

}
