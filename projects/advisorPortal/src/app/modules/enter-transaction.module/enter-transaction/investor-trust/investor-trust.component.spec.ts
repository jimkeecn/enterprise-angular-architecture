import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorTrustComponent } from './investor-trust.component';

describe('InvestorTrustComponent', () => {
  let component: InvestorTrustComponent;
  let fixture: ComponentFixture<InvestorTrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorTrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
