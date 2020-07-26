import { BlogService } from './../../../core/service/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-list-container',
  templateUrl: './blog-list-container.component.html',
  styleUrls: ['./blog-list-container.component.css']
})
export class BlogListContainerComponent implements OnInit {
  title = "Liste des articles";
  //trainings is a table of object Training
  articles;
 
  
  constructor(
    service:BlogService,
    private route: ActivatedRoute
    
    ) {
    this.articles = service.getArticles();
   }

  getTitle() {
    return this.title;
  }

  ngOnInit(): void {
  }

}
