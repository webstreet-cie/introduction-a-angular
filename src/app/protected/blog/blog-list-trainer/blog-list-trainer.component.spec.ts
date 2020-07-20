import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListTrainerComponent } from './blog-list-trainer.component';

describe('BlogListTrainerComponent', () => {
  let component: BlogListTrainerComponent;
  let fixture: ComponentFixture<BlogListTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
