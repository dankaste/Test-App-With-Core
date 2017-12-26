import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TickTockModule } from 'angular-library-seed';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TickTockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
