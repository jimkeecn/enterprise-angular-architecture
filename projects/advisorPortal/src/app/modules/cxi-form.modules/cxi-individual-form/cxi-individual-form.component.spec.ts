import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxiIndividualFormComponent } from './cxi-individual-form.component';

describe('CxiIndividualFormComponent', () => {
  let component: CxiIndividualFormComponent;
  let fixture: ComponentFixture<CxiIndividualFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxiIndividualFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxiIndividualFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
