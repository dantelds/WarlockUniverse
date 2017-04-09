import {Component, Output, EventEmitter} from '@angular/core';
import {ILink} from "../../interfaces/link";

@Component({
  selector: 'menu-app',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() onModuleClicked: EventEmitter<ILink>=new EventEmitter<ILink>();
  items: ILink[]=[
    {
      href:'warlock',
      text:'Personaje'
    },
    {
      href:'coming-soon',
      text:'Escuela'
    },
    {
      href:'coming-soon',
      text:'Mazmorras'
    },
    {
      href:'coming-soon',
      text:'Duelos'
    },
    {
      href:'coming-soon',
      text:'Tienda'
    },
  ];
  currentItem:ILink;
  constructor(){
    this.currentItem = this.items[0];
  }
  onSelectItem(selectedItem:ILink):void{
    this.currentItem=selectedItem;
    this.onModuleClicked.emit(selectedItem);
  }
}
