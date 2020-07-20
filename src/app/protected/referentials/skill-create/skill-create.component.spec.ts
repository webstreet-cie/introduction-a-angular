import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCreateComponent } from './skill-create.component';

describe('SkillCreateComponent', () => {
  let component: SkillCreateComponent;
  let fixture: ComponentFixture<SkillCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
