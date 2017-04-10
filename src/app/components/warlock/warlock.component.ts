import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {IUser} from "../../interfaces/user";


@Component({
  selector: 'warlock',
  templateUrl: './warlock.component.html',
  styleUrls: ['./warlock.component.css']
})
export class WarlockComponent implements OnInit {

  warlock: IUser = null;

  constructor(private LoginService: LoginService) {
    this.warlock = LoginService.user;
  }

  ngOnInit() {
  }
}
