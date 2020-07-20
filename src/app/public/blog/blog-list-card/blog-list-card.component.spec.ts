import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListCardComponent } from './blog-list-card.component';

describe('BlogListCardComponent', () => {
  let component: BlogListCardComponent;
  let fixture: ComponentFixture<BlogListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
