import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorDetailComponent } from './investor-detail.component';

describe('InvestorDetailComponent', () => {
  let component: InvestorDetailComponent;
  let fixture: ComponentFixture<InvestorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
