import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCarouselComponent } from './training-carousel.component';

describe('TrainingCarouselComponent', () => {
  let component: TrainingCarouselComponent;
  let fixture: ComponentFixture<TrainingCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
