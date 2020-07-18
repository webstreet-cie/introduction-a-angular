import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  title = "Liste des catégories de formations";
  categories: Category[];

  constructor(service:CategoriesService) {
    this.categories = service.getCategories();
   }

   getTitle() {
    return this.title;
  }

  ngOnInit(): void {
  }

}
