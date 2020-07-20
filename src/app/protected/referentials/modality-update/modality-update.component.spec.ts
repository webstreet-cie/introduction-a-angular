import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityUpdateComponent } from './modality-update.component';

describe('ModalityUpdateComponent', () => {
  let component: ModalityUpdateComponent;
  let fixture: ComponentFixture<ModalityUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalityUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
