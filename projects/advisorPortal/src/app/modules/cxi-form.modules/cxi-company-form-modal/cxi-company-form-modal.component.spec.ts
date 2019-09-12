import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiCompanyFormModalComponent } from './cxi-company-form-modal.component';

describe('CxiCompanyFormModalComponent', () => {
  let component: CxiCompanyFormModalComponent;
  let fixture: ComponentFixture<CxiCompanyFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiCompanyFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiCompanyFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
