import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListParticipantComponent } from './session-list-participant.component';

describe('SessionListParticipantComponent', () => {
  let component: SessionListParticipantComponent;
  let fixture: ComponentFixture<SessionListParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionListParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
