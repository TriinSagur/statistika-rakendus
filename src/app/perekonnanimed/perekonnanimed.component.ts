import { Component } from '@angular/core';

import PerekonnanimedJson from './perekonnanimed.json';


interface PEREKONNNIMED {
  id: Number;
  name: String;
  value: Number;
}
@Component({ templateUrl: 'perekonnanimed.component.html' })
export class PerekonnanimedComponent {
  Perekonnanimed: PEREKONNNIMED[]=PerekonnanimedJson;
}
