import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidatorExplicitComponent } from './form-validator-explicit.component';

describe('FormValidatorExplicitComponent', () => {
  let component: FormValidatorExplicitComponent;
  let fixture: ComponentFixture<FormValidatorExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidatorExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidatorExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
