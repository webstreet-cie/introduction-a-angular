import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticlesCategoriesComponent } from './blog-articles-categories.component';

describe('BlogArticlesCategoriesComponent', () => {
  let component: BlogArticlesCategoriesComponent;
  let fixture: ComponentFixture<BlogArticlesCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArticlesCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticlesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
