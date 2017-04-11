import {Component, Input, OnInit} from '@angular/core';
import {IInput} from '../../interfaces/input'


@Component({
  selector: 'input-component',
  templateUrl: './templates/input.component.html',
  styleUrls: ['./assets/input.component.css']
})
export class InputComponent{
  @Input() setup: any = null;
  constructor() {
  }
}
