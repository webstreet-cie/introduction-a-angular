import { Component, OnInit } from '@angular/core';
import {TrainingsService} from '../../../services/training.service';
import {Training} from '../../../models/training.model';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

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
