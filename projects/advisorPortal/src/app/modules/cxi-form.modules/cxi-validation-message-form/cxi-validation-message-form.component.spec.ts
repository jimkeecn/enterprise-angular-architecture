import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiValidationMessageFormComponent } from './cxi-validation-message-form.component';

describe('CxiValidationMessageFormComponent', () => {
  let component: CxiValidationMessageFormComponent;
  let fixture: ComponentFixture<CxiValidationMessageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiValidationMessageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiValidationMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
