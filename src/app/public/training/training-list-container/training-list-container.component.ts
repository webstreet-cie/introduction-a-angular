import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../../core/service/training.service';
import {Training} from '../../../shared/models/training';

@Component({
  selector: 'app-training-list-container',
  templateUrl: './training-list-container.component.html',
  styleUrls: ['./training-list-container.component.css']
})
export class TrainingListContainerComponent implements OnInit {

  title = "Liste des formations";
  //trainings is a table of object Training
 trainings: Training[];
  constructor(service:TrainingService) { 
    this.trainings = service.getTrainings();
    console.log(this.trainings);
  }
 
  getTitle() {
    return this.title;
  }

  ngOnInit() {

  }

}
