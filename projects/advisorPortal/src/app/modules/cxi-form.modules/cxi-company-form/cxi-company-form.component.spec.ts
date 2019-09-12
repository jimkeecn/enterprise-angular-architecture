import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiCompanyFormComponent } from './cxi-company-form.component';

describe('CxiCompanyFormComponent', () => {
  let component: CxiCompanyFormComponent;
  let fixture: ComponentFixture<CxiCompanyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiCompanyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
