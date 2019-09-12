import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorJointComponent } from './investor-joint.component';

describe('InvestorJointComponent', () => {
  let component: InvestorJointComponent;
  let fixture: ComponentFixture<InvestorJointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorJointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorJointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
