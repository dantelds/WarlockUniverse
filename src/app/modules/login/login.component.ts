import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {Md5} from 'ts-md5/dist/md5';
import {TranslateService} from '../../services/language.service';
import {IInput} from '../../interfaces/input'
import {IUser} from '../../interfaces/user'


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: string = null;

  modelTest: string = 'test';

  user: IUser = null;

  userInput: IInput = {
    id: 'lg_username',
    extraClass: null,
    error: this._translate.instant('user-username-required'),
    label: this._translate.instant('user-username'),
    model: '',
    name: 'lg_username',
    placeholder: this._translate.instant('user-username'),
    required: true,
    type: 'text'
  };

  passwordInput: IInput = {
    id: 'lg_password',
    extraClass: null,
    error: this._translate.instant('user-password-required'),
    label: this._translate.instant('user-password'),
    model: '',
    name: 'lg_password',
    placeholder: this._translate.instant('user-password'),
    required: true,
    type: 'password'
  };

  constructor(private GeneralService: GeneralService, private _translate: TranslateService) {
  }

  onLogin(user: any) {
    this.error = null;
    this.GeneralService.user = user;
    this.GeneralService.loginManagerEmmit(user);
  }

  onError(error: any) {
    this.passwordInput.model = '';
    this.error = error._body;
  }

  login() {
    var body: Object = {
      username: this.userInput.model,
      password: Md5.hashStr(this.passwordInput.model).toString()
    };
    this.GeneralService.apiCall('post', 'login', body).subscribe((Response: any) => this.onLogin(Response), (Error: any) => this.onError(Error));

  }

}
