import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListTrainerComponent } from './session-list-trainer.component';

describe('SessionListTrainerComponent', () => {
  let component: SessionListTrainerComponent;
  let fixture: ComponentFixture<SessionListTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionListTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
