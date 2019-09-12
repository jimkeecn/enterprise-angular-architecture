import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiLayoutHeaderComponent } from './cxi-layout-header.component';

describe('CxiLayoutHeaderComponent', () => {
  let component: CxiLayoutHeaderComponent;
  let fixture: ComponentFixture<CxiLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
