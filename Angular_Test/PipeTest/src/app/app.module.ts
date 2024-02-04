import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo02Component } from './demo02/demo02.component';
import { Pipe01Pipe } from './pipe01.pipe';
import { Pipe02Pipe } from './pipe02.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo02Component,
    Pipe01Pipe,
    Pipe02Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
