import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { RouterModule } from '@angular/router';
import { FrenchLongDateComponent } from './french-long-date/french-long-date.component';



@NgModule({
  declarations: [PaginationComponent, FilterComponent, SortComponent, FrenchLongDateComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginationComponent, FilterComponent, SortComponent, FrenchLongDateComponent
  ]
})
export class PartialsModule { }
