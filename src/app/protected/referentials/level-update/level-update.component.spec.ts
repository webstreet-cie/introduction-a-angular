import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpdateComponent } from './level-update.component';

describe('LevelUpdateComponent', () => {
  let component: LevelUpdateComponent;
  let fixture: ComponentFixture<LevelUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
