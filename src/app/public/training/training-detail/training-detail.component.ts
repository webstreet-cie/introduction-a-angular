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
  imageUrl: string;
  category: string;
  reference: string;
  level: string;
  durationInHours: number;
  description:string;
  practicalWork:string;
  modalities;
  participants;
  prerequisite:string;
  skills;
  modules;
  sessions;
  goals;
  pedagogicalMethods;
  
  

  constructor(
    private service:TrainingService, 
    private route: ActivatedRoute) { 

  }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.title = this.service.getTrainingById(+id).title;
    this.imageUrl= this.service.getTrainingById(+id).image.url;
    this.category= this.service.getTrainingById(+id).category.name;
    this.reference = this.service.getTrainingById(+id).reference;
    this.level = this.service.getTrainingById(+id).level;
    this.durationInHours = this.service.getTrainingById(+id).durationInHours;
    this.description = this.service.getTrainingById(+id).description;
    this.practicalWork = this.service.getTrainingById(+id).practicalWork;
    this.modalities =  this.service.getTrainingById(+id)["modalities"];
    this.participants =  this.service.getTrainingById(+id)["participants"];
    this.goals =  this.service.getTrainingById(+id)["goals"];
    this.pedagogicalMethods =  this.service.getTrainingById(+id)["pedagogicalMethods"];
    this.prerequisite = this.service.getTrainingById(+id).prerequisite;
    this.skills =  this.service.getTrainingById(+id)["skills"];
    this.modules =  this.service.getTrainingById(+id)["modules"];
    this.sessions =  this.service.getTrainingById(+id)["sessions"];
    

  }

}
