import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentParametersComponent } from './payment-parameters.component';

describe('PaymentParametersComponent', () => {
  let component: PaymentParametersComponent;
  let fixture: ComponentFixture<PaymentParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
