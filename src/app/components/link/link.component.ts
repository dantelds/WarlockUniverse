import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ILink} from "./interfaces/link";


@Component({
  selector: 'link-component',
  templateUrl: './templates/link.component.html',
  styleUrls: ['./assets/link.component.css']
})
export class LinkComponent{
  @Output() onLinkClicked: EventEmitter<ILink> = new EventEmitter<ILink>();

  @Input() setup: ILink = null;
  constructor() {
  }

  onClick(link:ILink){
    this.onLinkClicked.emit(link);
  }
}
