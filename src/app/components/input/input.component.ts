import {Component, Input} from '@angular/core';
import {IInput} from "./interfaces/input.interface";


@Component({
  selector: 'input-component',
  templateUrl: './templates/input.component.html',
  styleUrls: ['./assets/input.component.css']
})
export class InputComponent{
  @Input() setup: IInput = null;
  constructor() {
  }
}
