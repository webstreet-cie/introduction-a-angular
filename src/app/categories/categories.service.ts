import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories() {
    let categories = [
      {
        name: 'Base de données'
      },
      {
        name: 'Langages Client'
      },
      {
        name: 'Langages Serveur'
      },
      {
        name: 'UX/UI'
      }

    ];
    return categories;
  }
}
