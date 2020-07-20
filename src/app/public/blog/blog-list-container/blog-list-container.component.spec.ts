import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListContainerComponent } from './blog-list-container.component';

describe('BlogListContainerComponent', () => {
  let component: BlogListContainerComponent;
  let fixture: ComponentFixture<BlogListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
