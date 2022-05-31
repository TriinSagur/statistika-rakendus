import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MehedComponent } from './mehed';
import { NaisedComponent } from './naised';

const routes: Routes = [
  { path: 'mehed', component: MehedComponent },
  { path: 'naised', component: NaisedComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
