import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiIndividualFormBsrcComponent } from './cxi-individual-form-bsrc.component';

describe('CxiIndividualFormBsrcComponent', () => {
  let component: CxiIndividualFormBsrcComponent;
  let fixture: ComponentFixture<CxiIndividualFormBsrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiIndividualFormBsrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiIndividualFormBsrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
