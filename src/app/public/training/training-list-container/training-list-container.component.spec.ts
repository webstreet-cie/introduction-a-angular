import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingListContainerComponent } from './training-list-container.component';

describe('TrainingListContainerComponent', () => {
  let component: TrainingListContainerComponent;
  let fixture: ComponentFixture<TrainingListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
