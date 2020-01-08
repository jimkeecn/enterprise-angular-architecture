import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageComponent } from './welcome-page.component';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Button } from 'protractor';

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule],
      declarations: [ WelcomePageComponent ],
      providers:[ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#submitName click should set #submitted = true ', ()=>{
    const button = fixture.debugElement.nativeElement.querySelector('#submitName');
    expect(component.submitted).toBe(false, 'off at first');
    button.click();
    expect(component.submitted).toBe(true, 'after click');
  })

  it('#validateFn() click should alert (please write your name again) and set #submitted if #name is null',()=>{
    /* Listen on window alert event */
    spyOn(window, 'alert');
    /* click submit button to submit a name */
    const submit_button = fixture.debugElement.nativeElement.querySelector('#submitName');
    submit_button.click();
    fixture.detectChanges();
    /* change detect for *ngIf */
    const verify_button = fixture.debugElement.nativeElement.querySelector('#verifyName');
    /* set name as null */
    component.name = null;
    verify_button.click();
    /* check result */
    expect(window.alert).toHaveBeenCalledWith('please write your name again');
    expect(component.submitted).toBe(false,'after click');
  })

});
