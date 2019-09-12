import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiLayoutSidemenuComponent } from './cxi-layout-sidemenu.component';

describe('CxiLayoutSidemenuComponent', () => {
  let component: CxiLayoutSidemenuComponent;
  let fixture: ComponentFixture<CxiLayoutSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiLayoutSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiLayoutSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
