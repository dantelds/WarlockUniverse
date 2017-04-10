import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {IUser} from "../../interfaces/user";


@Component({
  selector: 'dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent {

  warlock: IUser = null;

  constructor(private LoginService: LoginService) {
    this.warlock = LoginService.user;
  }

}
