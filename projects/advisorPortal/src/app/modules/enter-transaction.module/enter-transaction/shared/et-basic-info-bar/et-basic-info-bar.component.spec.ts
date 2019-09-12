import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtBasicInfoBarComponent } from './et-basic-info-bar.component';

describe('EtBasicInfoBarComponent', () => {
  let component: EtBasicInfoBarComponent;
  let fixture: ComponentFixture<EtBasicInfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtBasicInfoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtBasicInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
