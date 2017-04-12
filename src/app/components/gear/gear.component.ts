import {Component, Input} from '@angular/core';
import {IGear} from "./interfaces/gear.interface";


@Component({
  selector: 'gear-component',
  templateUrl: './templates/gear.component.html',
  styleUrls: ['./assets/gear.component.css']
})
export class GearComponent{
  @Input() setup: IGear = null;
  constructor() {
  }
}
