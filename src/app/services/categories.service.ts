import { Injectable } from '@angular/core';
import { Category } from './../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Category[];

  getCategories() {
    this.categories = [
      {id:1,name:"Développement Web"},
      {id:2,name:"Réseau"},
      {id:3,name:"Bureautique"}

    ];
    return this.categories;
  }
}
