import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerRateGainComponent } from './trainer-rate-gain.component';

describe('TrainerRateGainComponent', () => {
  let component: TrainerRateGainComponent;
  let fixture: ComponentFixture<TrainerRateGainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerRateGainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerRateGainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
