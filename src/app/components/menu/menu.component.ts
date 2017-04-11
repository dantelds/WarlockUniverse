import {Component, Output, EventEmitter} from '@angular/core';
import {ILink} from "../../interfaces/link";
import {TranslateService} from '../../services/language.service';
declare var $: any;


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
    this.setMenuLinks();
  }

  private setMenuLinks(): void {
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
        href: 'dungeon',
        text: this._translate.instant('menu-dungeons')
      },
      {
        href: 'arena',
        text: this._translate.instant('menu-arena')
      },
      {
        href: 'store',
        text: this._translate.instant('menu-store')
      },
      {
        href: 'coming-soon',
        text: 'coming-soon'
      }
    ];
    this.currentItem = this.items[0];
  };

  onSelectItem(selectedItem: ILink): void {
    $('.navbar-collapse').collapse("hide");
    this.currentItem = selectedItem;
    this.onModuleClicked.emit(selectedItem);
  }
}
