import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import {createCustomElement} from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents:[WelcomePageComponent]
})
export class AppModule { 
  constructor(public injector:Injector){
 
  }
  ngDoBootstrap() {
    const welcomePageWebComponent = createCustomElement(WelcomePageComponent,{injector:this.injector})
    customElements.define('shared-welcome-page',welcomePageWebComponent)
  }
}
