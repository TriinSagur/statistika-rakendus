import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MehedComponent } from './mehed';
import { NaisedComponent } from './naised';
import { PerekonnanimedComponent } from './perekonnanimed';
import {DynamicFormComponent} from "./tagasiside";



const routes: Routes = [
  { path: 'mehed', component: MehedComponent },
  { path: 'naised', component: NaisedComponent },
  { path: 'perekonnanimed', component: PerekonnanimedComponent },
  { path: 'tagasiside', component: DynamicFormComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '/mehed' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
