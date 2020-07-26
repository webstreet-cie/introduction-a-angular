import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchLongDateComponent } from './french-long-date.component';

describe('FrenchLongDateComponent', () => {
  let component: FrenchLongDateComponent;
  let fixture: ComponentFixture<FrenchLongDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchLongDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchLongDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
