import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiBankingFieldsFormComponent } from './cxi-banking-fields-form.component';

describe('CxiBankingFieldsFormComponent', () => {
  let component: CxiBankingFieldsFormComponent;
  let fixture: ComponentFixture<CxiBankingFieldsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiBankingFieldsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiBankingFieldsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
