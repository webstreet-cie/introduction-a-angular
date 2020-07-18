import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-training-list-card',
  templateUrl: './training-list-card.component.html',
  styleUrls: ['./training-list-card.component.css']
})
export class TrainingListCardComponent {
  @Input() title: string;
  @Input() category: string;
  @Input() description: string;
  @Input() goal: string;
  constructor() { }



}
