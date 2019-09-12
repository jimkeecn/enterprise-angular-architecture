import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorCompanyComponent } from './investor-company.component';

describe('InvestorCompanyComponent', () => {
  let component: InvestorCompanyComponent;
  let fixture: ComponentFixture<InvestorCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
