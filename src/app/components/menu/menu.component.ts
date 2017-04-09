import {Component, Output, EventEmitter} from '@angular/core';
import {ILink} from "../../interfaces/link";
import {TranslateService} from '../../services/language.service';


@Component({
  selector: 'menu-app',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() onModuleClicked: EventEmitter<ILink> = new EventEmitter<ILink>();


  items: ILink[] = null;
  currentItem: ILink;

  constructor(private _translate: TranslateService) {
    this.items = [
      {
        href: 'warlock',
        text: this._translate.instant('menu-warlock')
      },
      {
        href: 'school',
        text: this._translate.instant('menu-school')
      },
      {
        href: 'coming-soon',
        text: this._translate.instant('menu-dungeons')
      },
      {
        href: 'coming-soon',
        text: this._translate.instant('menu-arena')
      },
      {
        href: 'coming-soon',
        text: this._translate.instant('menu-store')
      },
    ];
    this.currentItem = this.items[0];
    console.log('items-------->', this.items);
    console.log("this._translate.instant('menu-warlock')-------->", this._translate.instant('menu-warlock'));
    console.log("this._translate.instant('user-login')-------->", this._translate.instant('user-login'));
  }

  onSelectItem(selectedItem: ILink): void {
    this.currentItem = selectedItem;
    this.onModuleClicked.emit(selectedItem);
  }
}
