import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {IUser} from "../../interfaces/user";


@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  warlock: IUser = null;

  constructor(private LoginService: LoginService) {
    this.warlock = LoginService.user;
  }

}
