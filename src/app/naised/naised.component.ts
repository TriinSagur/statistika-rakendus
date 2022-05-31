import { Component } from '@angular/core';

import NaisedJson from './naised.json';

interface NAISED {
  id: Number;
  name: String;
  value: Number;
}

@Component({ templateUrl: 'naised.component.html' })
export class NaisedComponent {
  Naised: NAISED[]=NaisedJson;
}
