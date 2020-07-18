import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFeaturesCardComponent } from './blog-features-card.component';

describe('BlogFeaturesCardComponent', () => {
  let component: BlogFeaturesCardComponent;
  let fixture: ComponentFixture<BlogFeaturesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFeaturesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFeaturesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
