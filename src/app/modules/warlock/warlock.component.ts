import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {IUser} from "../../interfaces/user";
import {IGear} from "../../components/gear/interfaces/gear.interface";


@Component({
  selector: 'warlock',
  templateUrl: './templates/warlock.component.html',
  styleUrls: ['./assets/warlock.component.css']
})
export class WarlockComponent implements OnInit {

  warlock: IUser = null;
  gear: IGear = {
    image:{
      alt:'logo',
      extraClass:'',
      src: null
    },
    description:'lorem ipsum dolor asit met'
  };
  constructor(private GeneralService: GeneralService) {
    this.warlock = GeneralService.user;
  }

  ngOnInit() {
  }
}
