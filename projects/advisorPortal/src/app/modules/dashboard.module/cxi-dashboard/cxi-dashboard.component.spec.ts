import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiDashboardComponent } from './cxi-dashboard.component';

describe('CxiDashboardComponent', () => {
  let component: CxiDashboardComponent;
  let fixture: ComponentFixture<CxiDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
