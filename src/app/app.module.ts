import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MehedComponent } from './mehed';
import { NaisedComponent } from './naised';

@NgModule({
  declarations: [
    AppComponent,
    MehedComponent,
    NaisedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
