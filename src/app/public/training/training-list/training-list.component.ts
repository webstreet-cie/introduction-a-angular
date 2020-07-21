import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../../../core/service/training.service';
import {Training} from '../../../shared/models/training';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  title = "Liste des formations";
  trainings: Training[];

  constructor() { 
    
  }

  getTitle() {
    return this.title;
  }

 

  ngOnInit(): void {
  }

}
