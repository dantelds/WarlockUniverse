import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {Md5} from 'ts-md5/dist/md5';
import {IUser} from "../../interfaces/user";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  user: IUser = null;
  error: string = null;


  constructor(private GeneralService: GeneralService) {
    this.user = this.GeneralService.returnEmptyUser();
  }

  onLogin(user: any) {
    this.error = null;
    this.user = user;
    this.GeneralService.user = user;
    this.GeneralService.loginManagerEmmit(user);
  }

  onError(error: any) {
    this.error = error._body;
  }

  login() {
    var body: IUser = Object.assign({}, this.user);
    body.password = Md5.hashStr(this.user.password).toString();
    this.GeneralService.apiCall('post', 'login', body)
      .subscribe((Response:any) => this.onLogin(Response), (Error:any) => this.onError(Error));

  }

}
