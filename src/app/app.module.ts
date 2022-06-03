import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { MehedComponent } from './mehed';
import { NaisedComponent } from './naised';
import { PerekonnanimedComponent } from './perekonnanimed';
import { DynamicFormComponent } from './tagasiside';



@NgModule({
  declarations: [
    AppComponent,
    MehedComponent,
    NaisedComponent,
    PerekonnanimedComponent,
    DynamicFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
