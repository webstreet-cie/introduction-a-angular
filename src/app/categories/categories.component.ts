import { Component, OnInit } from '@angular/core';
import {CategoriesService} from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  title = "Liste des catégories de formations";
  categories;

  constructor(service:CategoriesService) {
    this.categories = service.getCategories();
   }

   getTitle() {
    return this.title;
  }

  ngOnInit(): void {
  }

}
