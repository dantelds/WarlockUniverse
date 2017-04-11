import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {TranslateService} from '../../services/language.service';
import {Md5} from 'ts-md5/dist/md5';

import {IUser} from "../../interfaces/user";
@Component({
  selector: 'login',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user: IUser = null;
  error: string = null;
  schoolText: string = null;

  constructor(private GeneralService: GeneralService, private _translate: TranslateService) {
    this.user = this.GeneralService.returnEmptyUser();
  }

  setInitialAttributes(strength: number, magic: number, health: number) {
    this.user.strength = strength;
    this.user.magic = magic;
    this.user.health = health;
  }

  onChangeSchool() {
    switch (this.user.school) {
      case 'earth':
        this.schoolText = this._translate.instant('school-earth-advantages');
        this.setInitialAttributes(7, 2, 3);
        break;
      case 'fire':
        this.schoolText = this._translate.instant('school-fire-advantages');
        this.setInitialAttributes(2, 7, 3);
        break;
      case 'water':
        this.schoolText = this._translate.instant('school-water-advantages');
        this.setInitialAttributes(4, 4, 4);
        break;
      case 'wind':
        this.schoolText = this._translate.instant('school-wind-advantages');
        this.setInitialAttributes(2, 3, 7);
        break;
      default:
        this.schoolText = null;
        break;
    }
  }

  onSignUp(user: IUser) {
    this.error = null;
    this.GeneralService.user = user;
    this.GeneralService.loginManagerEmmit(user);
  }

  onError(error: any) {
    this.error = error._body;
  }

  signUp() {
    var body: IUser = Object.assign({}, this.user);
    body.password = Md5.hashStr(this.user.password).toString();
    this.GeneralService.apiCall('post', 'sign-up', body)
      .subscribe((Response:any) => this.onSignUp(Response), (Error:any) => this.onError(Error));
  }

}
