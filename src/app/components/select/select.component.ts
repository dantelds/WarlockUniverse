import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ISelect} from "../../interfaces/select";

@Component({
  selector: 'select-component',
  templateUrl: './templates/select.component.html',
  styleUrls: ['./assets/select.component.css']
})
export class SelectComponent {
  @Input() setup: ISelect = null;
  @Output() onOptionSelected: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }
  onSelectOption(selectedOption:string){
    this.onOptionSelected.emit(selectedOption);
  }
}
