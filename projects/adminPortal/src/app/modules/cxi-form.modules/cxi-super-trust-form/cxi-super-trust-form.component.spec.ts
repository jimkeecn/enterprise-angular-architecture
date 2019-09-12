import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiSuperTrustFormComponent } from './cxi-super-trust-form.component';

describe('CxiSuperTrustFormComponent', () => {
  let component: CxiSuperTrustFormComponent;
  let fixture: ComponentFixture<CxiSuperTrustFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiSuperTrustFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiSuperTrustFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
