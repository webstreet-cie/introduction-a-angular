import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityCreateComponent } from './modality-create.component';

describe('ModalityCreateComponent', () => {
  let component: ModalityCreateComponent;
  let fixture: ComponentFixture<ModalityCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalityCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
