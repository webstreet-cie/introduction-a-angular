
import { BlogService } from './../../../core/service/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  subscription;
  id:string;
  title:string;
  author:string;
  publicationDate:string;
  content;
  category:string;
  slug:string;
  commentsNumber:number;
  comments;
  
  constructor(
    private service:BlogService, 
    private route: ActivatedRoute
  ) {
    
    
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
       //const id = this.route.snapshot.params['id'];
    this.slug = this.service.getArticleById(+this.id).slug;
    this.title = this.service.getArticleById(+this.id).title;
    this.author = this.service.getArticleById(+this.id).author;
     this.category= this.service.getArticleById(+this.id).training.category.name;
    this.publicationDate = this.service.getArticleById(+this.id).publicationDate;
    this.content = this.service.getArticleById(+this.id).content;
    this.commentsNumber = this.service.getArticleById(+this.id).commentsNumber;
    this.comments = this.service.getArticleById(+this.id)["comments"];
 
    })
   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

 

}
