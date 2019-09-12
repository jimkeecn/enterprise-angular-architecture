import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTransactionComponent } from './enter-transaction.component';

describe('EnterTransactionComponent', () => {
  let component: EnterTransactionComponent;
  let fixture: ComponentFixture<EnterTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
