import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {IUser} from "../../interfaces/user";


@Component({
  selector: 'arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent {

  warlock: IUser = null;

  constructor(private LoginService: LoginService) {
    this.warlock = LoginService.user;
  }

}
