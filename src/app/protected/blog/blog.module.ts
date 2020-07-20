import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogListTrainerComponent } from './blog-list-trainer/blog-list-trainer.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';



@NgModule({
  declarations: [BlogListComponent, BlogListTrainerComponent, BlogUpdateComponent, BlogCreateComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
