import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiLayoutMenuComponent } from './cxi-layout-menu.component';

describe('CxiLayoutMenuComponent', () => {
  let component: CxiLayoutMenuComponent;
  let fixture: ComponentFixture<CxiLayoutMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiLayoutMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiLayoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
