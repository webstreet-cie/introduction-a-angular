import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFeaturesComponent } from './session-features.component';

describe('SessionFeaturesComponent', () => {
  let component: SessionFeaturesComponent;
  let fixture: ComponentFixture<SessionFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
