import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { IUser } from "../../interfaces/user";


@Component({
  selector: 'school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent{

  warlock: IUser = null;

  constructor(private LoginService: LoginService) {
    this.warlock = LoginService.user;
  }

}