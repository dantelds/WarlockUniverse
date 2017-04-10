import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Md5} from 'ts-md5/dist/md5';
import {IUser} from "../../interfaces/user";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: IUser = null;
  error: string = null;

  constructor(private LoginService: LoginService) {
    this.user = this.LoginService.returnEmptyUser();
  }

  onLogin(user: IUser) {
    this.error = null;
    this.LoginService.user = user;
    this.LoginService.loginManagerEmmit(user);
  }

  onError(error: any) {
    this.error = error._body;
  }

  login() {
    var LoggedUser: IUser = Object.assign({}, this.user);
    LoggedUser.password = Md5.hashStr(this.user.password).toString();
    this.LoginService.logIn(LoggedUser).subscribe(IUser => this.onLogin(IUser), Error => this.onError(Error));
  }

}
