import { Component, OnInit } from '@angular/core';
import {TrainingsService} from '../services/training.service';
import {Training} from '../models/training.model';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  title = "Liste des formations";
  trainings: Training[];

  constructor(service:TrainingsService) { 
    this.trainings = service.getTrainings();
    console.log(this.trainings);
  }

  getTitle() {
    return this.title;
  }

 

  ngOnInit(): void {
  }

}
