import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {IUser} from "../../interfaces/user";


@Component({
  selector: 'arena',
  templateUrl: './templates/arena.component.html',
  styleUrls: ['./assets/arena.component.css']
})
export class ArenaComponent {

  warlock: IUser = null;

  constructor(private GeneralService: GeneralService) {
    this.warlock = GeneralService.user;
  }

}
