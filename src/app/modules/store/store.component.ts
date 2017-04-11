import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {IUser} from "../../interfaces/user";


@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  warlock: IUser = null;

  constructor(private GeneralService: GeneralService) {
    this.warlock = GeneralService.user;
  }

}
