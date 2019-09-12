import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingDetailComponent } from './banking-detail.component';

describe('BankingDetailComponent', () => {
  let component: BankingDetailComponent;
  let fixture: ComponentFixture<BankingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
