import { Component, OnInit } from '@angular/core';
import {TrainingsService} from './training.service';


@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  title = "Liste des formations";
  trainings;

  constructor(service:TrainingsService) { 

   
    this.trainings = service.getTrainings();
  }

  getTitle() {
    return this.title;
  }

 

  ngOnInit(): void {
  }

}
