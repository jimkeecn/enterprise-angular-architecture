import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiLoginComponent } from './cxi-login.component';

describe('CxiLoginComponent', () => {
  let component: CxiLoginComponent;
  let fixture: ComponentFixture<CxiLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
