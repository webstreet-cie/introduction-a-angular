import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-session-features',
  templateUrl: './session-features.component.html',
  styleUrls: ['./session-features.component.css']
})
export class SessionFeaturesComponent implements OnInit {
sessions;
  constructor() { }
  ngOnInit() {
    this.sessions = [
      {
        title:"Les bases de MySql"
      },
      {
        title:"Les bases de Git"
      },
      {
        title:"Php et Symfony"
      }

    ];
  }
}
