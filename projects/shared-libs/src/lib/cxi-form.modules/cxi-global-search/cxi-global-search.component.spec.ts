import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiGlobalSearchComponent } from './cxi-global-search.component';

describe('CxiGlobalSearchComponent', () => {
  let component: CxiGlobalSearchComponent;
  let fixture: ComponentFixture<CxiGlobalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiGlobalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiGlobalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
