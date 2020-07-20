import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListContainerComponent } from './session-list-container.component';

describe('SessionListContainerComponent', () => {
  let component: SessionListContainerComponent;
  let fixture: ComponentFixture<SessionListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
