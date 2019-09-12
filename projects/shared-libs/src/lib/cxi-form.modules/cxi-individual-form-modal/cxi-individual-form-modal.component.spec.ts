import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiIndividualFormModalComponent } from './cxi-individual-form-modal.component';

describe('CxiIndividualFormModalComponent', () => {
  let component: CxiIndividualFormModalComponent;
  let fixture: ComponentFixture<CxiIndividualFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiIndividualFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiIndividualFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
