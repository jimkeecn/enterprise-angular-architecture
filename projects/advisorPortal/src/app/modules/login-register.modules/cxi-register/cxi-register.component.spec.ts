import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiRegisterComponent } from './cxi-register.component';

describe('CxiRegisterComponent', () => {
  let component: CxiRegisterComponent;
  let fixture: ComponentFixture<CxiRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
