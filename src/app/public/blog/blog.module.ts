import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogListCardComponent } from './blog-list-card/blog-list-card.component';
import { BlogListContainerComponent } from './blog-list-container/blog-list-container.component';
import { BlogRecentArticlesComponent } from './blog-recent-articles/blog-recent-articles.component';
import { BlogArticlesCategoriesComponent } from './blog-articles-categories/blog-articles-categories.component';



@NgModule({
  declarations: [BlogDetailComponent, BlogListComponent, BlogListCardComponent, BlogListContainerComponent, BlogRecentArticlesComponent, BlogArticlesCategoriesComponent],
  imports: [
    SharedModule
  ]
})
export class BlogModule { }
