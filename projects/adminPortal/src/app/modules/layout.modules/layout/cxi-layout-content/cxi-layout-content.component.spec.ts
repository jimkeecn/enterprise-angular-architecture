import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiLayoutContentComponent } from './cxi-layout-content.component';

describe('CxiLayoutContentComponent', () => {
  let component: CxiLayoutContentComponent;
  let fixture: ComponentFixture<CxiLayoutContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiLayoutContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
