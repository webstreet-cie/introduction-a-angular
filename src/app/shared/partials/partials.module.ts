import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';



@NgModule({
  declarations: [PaginationComponent, FilterComponent, SortComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent, FilterComponent, SortComponent
  ]
})
export class PartialsModule { }
