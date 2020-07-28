import { ActivatedRoute } from '@angular/router';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-training-card-deck',
  templateUrl: './training-card-deck.component.html',
  styleUrls: ['./training-card-deck.component.css']
})
export class TrainingCardDeckComponent  {
  @Input() trainings;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
