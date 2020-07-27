import { SessionTopFiveService } from '../../service/session-top-five.service';
import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: ['./public-menu.component.css']
})
export class PublicMenuComponent implements OnInit {
  categories;
  sessionTopFives;

  constructor(
    private categoryService:CategoryService, 
    private sessionTopFiveService:SessionTopFiveService
  ) { 
    this.categories = categoryService.getCategories();
    this.sessionTopFives = sessionTopFiveService.getSessionTopFives();
    console.log(this.sessionTopFives[0]);
  }

  ngOnInit(): void {
  }

}
