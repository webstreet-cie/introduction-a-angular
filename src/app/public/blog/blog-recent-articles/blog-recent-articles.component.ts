import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../../core/service/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-recent-articles',
  templateUrl: './blog-recent-articles.component.html',
  styleUrls: ['./blog-recent-articles.component.css']
})
export class BlogRecentArticlesComponent implements OnInit {
  recentArticles;

  constructor(
    private service:BlogService, 
    private route: ActivatedRoute
  ) { 
    this.recentArticles = service.getRecentArticles(2);
  }

  ngOnInit(): void {
  }

}
