import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
