import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {IUser} from "../../interfaces/user";


@Component({
  selector: 'warlock',
  templateUrl: './warlock.component.html',
  styleUrls: ['./warlock.component.css']
})
export class WarlockComponent implements OnInit {

  warlock: IUser = null;

  constructor(private GeneralService: GeneralService) {
    this.warlock = GeneralService.user;
  }

  ngOnInit() {
  }
}
