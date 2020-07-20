import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogListCardComponent } from './blog-list-card/blog-list-card.component';
import { BlogListContainerComponent } from './blog-list-container/blog-list-container.component';



@NgModule({
  declarations: [BlogDetailComponent, BlogListComponent, BlogListCardComponent, BlogListContainerComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
