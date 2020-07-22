import { TrainingService } from './../../../core/service/training.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  title: string;

  constructor(
    private service:TrainingService, 
    private route: ActivatedRoute) { 

  }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.title = this.service.getTrainingById(+id).title;
  }

}
