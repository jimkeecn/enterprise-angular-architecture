import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import {createCustomElement} from '@angular/elements';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
})
export class AppModule { 
  constructor(injector:Injector){
    const welcomePageWebComponent = createCustomElement(WelcomePageComponent,{injector:injector})
  }
  ngDoBootstrap() {}
}
