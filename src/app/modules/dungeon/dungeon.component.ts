import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {IUser} from "../../interfaces/user";


@Component({
  selector: 'dungeon',
  templateUrl: './templates/dungeon.component.html',
  styleUrls: ['./assets/dungeon.component.css']
})
export class DungeonComponent {

  warlock: IUser = null;

  constructor(private GeneralService: GeneralService) {
    this.warlock = GeneralService.user;
    console.log('this.warlock------>', this.warlock);
  }

}
