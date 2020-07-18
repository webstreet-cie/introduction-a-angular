import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFeaturesCardComponent } from './session-features-card.component';

describe('SessionFeaturesCardComponent', () => {
  let component: SessionFeaturesCardComponent;
  let fixture: ComponentFixture<SessionFeaturesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionFeaturesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFeaturesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
