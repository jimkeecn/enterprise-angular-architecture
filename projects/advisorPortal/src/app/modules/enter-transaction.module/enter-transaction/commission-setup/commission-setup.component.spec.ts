import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionSetupComponent } from './commission-setup.component';

describe('CommissionSetupComponent', () => {
  let component: CommissionSetupComponent;
  let fixture: ComponentFixture<CommissionSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
