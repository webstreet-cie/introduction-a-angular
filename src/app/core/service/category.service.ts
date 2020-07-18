import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';

@Injectable()
export class CategoryService {

  category1 = new Category(1, "Développement Web");
  category2 = new Category(2,"Marketing");
  category3 = new Category(3, "Design");

  getCategories() {
    let categories = [
        this.category1,
        this.category2,
        this.category3,
      ];

      return categories;
}
}
