import { Component } from '@angular/core';

import MehedJson from './mehed.json';


interface MEHED {
  id: Number;
  name: String;
  value: Number;
}



@Component({ templateUrl: 'mehed.component.html' })
export class MehedComponent {
  Mehed: MEHED[]=MehedJson;
}
