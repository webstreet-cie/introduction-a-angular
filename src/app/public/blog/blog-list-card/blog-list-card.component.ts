import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-blog-list-card',
  templateUrl: './blog-list-card.component.html',
  styleUrls: ['./blog-list-card.component.css']
})
export class BlogListCardComponent  {
  @Input() article;
 

  constructor(private route: ActivatedRoute) { }



}
