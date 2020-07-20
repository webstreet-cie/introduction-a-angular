import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListCardComponent } from './session-list-card.component';

describe('SessionListCardComponent', () => {
  let component: SessionListCardComponent;
  let fixture: ComponentFixture<SessionListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
