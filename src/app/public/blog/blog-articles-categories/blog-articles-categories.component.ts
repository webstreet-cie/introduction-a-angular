import { BlogService } from './../../../core/service/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-articles-categories',
  templateUrl: './blog-articles-categories.component.html',
  styleUrls: ['./blog-articles-categories.component.css']
})
export class BlogArticlesCategoriesComponent implements OnInit {
  articlesCategories;

  constructor(
    service:BlogService,
    private route: ActivatedRoute
  ) {
    this.articlesCategories = service.getArticlesCategories();

   }

  ngOnInit(): void {
  }

}
