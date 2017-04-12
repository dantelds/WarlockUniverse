import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {ILink} from "../link/interfaces/link";
import {TranslateService} from '../../services/language.service';
declare var $: any;


@Component({
  selector: 'menu-component',
  templateUrl: './templates/menu.component.html',
  styleUrls: ['./assets/menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onModuleClicked: EventEmitter<ILink> = new EventEmitter<ILink>();
  @Input() links: ILink[] = null;
  @Input() activeLink: ILink = null;

  constructor(private _translate: TranslateService) {
  }

  ngOnInit(): void {
    if(!this.activeLink && this.links){
      this.activeLink = this.links[0];
    }
  }

  private onSelectItem(clickedLink: ILink): void {
    $('.navbar-collapse').collapse("hide");
    this.activeLink = clickedLink;
    this.onModuleClicked.emit(clickedLink);
  }
}
