import { Component, Output, EventEmitter } from '@angular/core';
import { ILink } from "../../interfaces/link";
import { TranslateService } from '../../services/language.service';


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
      text:this._translate.instant('menu-warlock')
    },
    {
      href:'coming-soon',
      text:this._translate.instant('menu-school')
    },
    {
      href:'coming-soon',
      text:this._translate.instant('menu-dungeons')
    },
    {
      href:'coming-soon',
      text:this._translate.instant('menu-arena')
    },
    {
      href:'coming-soon',
      text:this._translate.instant('menu-store')
    },
  ];
  currentItem:ILink;
  constructor(private _translate: TranslateService){
    this.currentItem = this.items[0];
  }
  onSelectItem(selectedItem:ILink):void{
    this.currentItem=selectedItem;
    this.onModuleClicked.emit(selectedItem);
  }
}
