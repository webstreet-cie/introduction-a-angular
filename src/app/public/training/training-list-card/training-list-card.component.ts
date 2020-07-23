import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-training-list-card',
  templateUrl: './training-list-card.component.html',
  styleUrls: ['./training-list-card.component.css']
})
export class TrainingListCardComponent {
  @Input() level: string;
  @Input() title: string;
  @Input() category: string;
  @Input() durationInHours: string;
  @Input() reference: string;
  @Input() description: string;
  @Input() modalities:string[];
  @Input() id: string;
  @Input() slug: string;
  @Input() imageUrl:string;
  constructor() { }
}
