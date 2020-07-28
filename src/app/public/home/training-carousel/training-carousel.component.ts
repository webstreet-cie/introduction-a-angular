import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../../core/service/category.service';
import { TrainingService } from './../../../core/service/training.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-training-carousel',
  templateUrl: './training-carousel.component.html',
  styleUrls: ['./training-carousel.component.css']
})
export class TrainingCarouselComponent implements OnInit {
 categories;
 trainings;
 trainingsComputing;
 trainingsManagement;
 trainingsLanguage;


  constructor(
    private route: ActivatedRoute,
    private categoryService:CategoryService, 
    private trainingService:TrainingService
  ) {
    this.categories = categoryService.getCategories();
    this.trainings = trainingService.getTrainings();
    
    this.trainingsComputing = trainingService.getTrainingsByCategory("Informatique",8);
    this.trainingsManagement = trainingService.getTrainingsByCategory("Management",8);
    this.trainingsLanguage = trainingService.getTrainingsByCategory("Langues",8);
   





   }

  ngOnInit(): void {
  }

}
