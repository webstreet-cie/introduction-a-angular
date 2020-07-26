import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRecentArticlesComponent } from './blog-recent-articles.component';

describe('BlogRecentArticlesComponent', () => {
  let component: BlogRecentArticlesComponent;
  let fixture: ComponentFixture<BlogRecentArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogRecentArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRecentArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
