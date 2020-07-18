import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-session-features-card',
  templateUrl: './session-features-card.component.html',
  styleUrls: ['./session-features-card.component.css']
})
export class SessionFeaturesCardComponent {
@Input() title: string;

}
