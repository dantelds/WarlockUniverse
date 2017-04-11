import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {TranslateService} from '../../services/language.service';
import {Md5} from 'ts-md5/dist/md5';

import {IUser} from "../../interfaces/user";
import {IInput} from "../../interfaces/input";
import {ISelect} from "../../interfaces/select";
@Component({
  selector: 'login',
  templateUrl: './templates/sign-up.component.html',
  styleUrls: ['./assets/sign-up.component.css']
})
export class SignUpComponent {
  user: IUser = this.GeneralService.returnEmptyUser();
  error: string = null;
  schoolText: string = null;

  userInput: IInput = {
    id: 'su_username',
    extraClass: null,
    error: this._translate.instant('user-username-required'),
    label: this._translate.instant('user-username'),
    model: '',
    name: 'su_username',
    placeholder: this._translate.instant('user-username'),
    required: true,
    type: 'text'
  };

  passwordInput: IInput = {
    id: 'su_password',
    extraClass: null,
    error: this._translate.instant('user-password-required'),
    label: this._translate.instant('user-password'),
    model: '',
    name: 'su_password',
    placeholder: this._translate.instant('user-password'),
    required: true,
    type: 'password'
  };

  nameInput: IInput = {
    id: 'su_name',
    extraClass: null,
    error: this._translate.instant('user-name-required'),
    label: this._translate.instant('user-name'),
    model: '',
    name: 'su_name',
    placeholder: this._translate.instant('user-name'),
    required: true,
    type: 'text'
  };

  lastNameInput: IInput = {
    id: 'su_lastName',
    extraClass: null,
    error: this._translate.instant('user-lastName-required'),
    label: this._translate.instant('user-lastName'),
    model: '',
    name: 'su_lastName',
    placeholder: this._translate.instant('user-lastName'),
    required: true,
    type: 'text'
  };

  genderSelect: ISelect = {
    id:'su_gender',
    extraClass: '',
    error: this._translate.instant('user-gender-required'),
    label: this._translate.instant('user-gender'),
    model: '',
    name: 'su_gender',
    options:[
      {
        text:this._translate.instant('user-select-gender'),
        value:''
      },{
        text:this._translate.instant('Male'),
        value:'Male'
      },{
        text:this._translate.instant('Female'),
        value:'Female'
      }],
    required: true
  };

  birthDateInput: IInput = {
    id: 'su_birthDate',
    extraClass: null,
    error: this._translate.instant('user-birthDate-required'),
    label: this._translate.instant('user-birthDate'),
    model: '',
    name: 'su_birthDate',
    placeholder: this._translate.instant('user-birthDate'),
    required: true,
    type: 'date'
  };

  schoolSelect: ISelect = {
    id:'su_school',
    extraClass: '',
    error: this._translate.instant('user-school-required'),
    label: this._translate.instant('user-school'),
    model: '',
    name: 'su_school',
    options:[
      {
        text:this._translate.instant('user-select-school'),
        value:''
      },{
        text:this._translate.instant('earth'),
        value:'earth'
      },{
        text:this._translate.instant('fire'),
        value:'fire'
      },{
        text:this._translate.instant('water'),
        value:'water'
      },{
        text:this._translate.instant('wind'),
        value:'wind'
      }],
    required: true
  };



  constructor(private GeneralService: GeneralService, private _translate: TranslateService) {
  }

  setInitialAttributes(strength: number, magic: number, health: number) {
    this.user.strength = strength;
    this.user.magic = magic;
    this.user.health = health;
  }

  onSelectSchool(selectedOption:string){
    this.user.school = selectedOption;
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
    var body: IUser = {
      username: this.userInput.model,
      password: Md5.hashStr(this.passwordInput.model).toString(),
      name: this.nameInput.model,
      lastName: this.lastNameInput.model,
      birthDate: this.birthDateInput.model,
      school: this.schoolSelect.model,
      gender: this.genderSelect.model,
      health: this.user.health,
      magic: this.user.magic,
      strength: this.user.strength
    };
    this.GeneralService.apiCall('post', 'sign-up', body)
      .subscribe((Response:any) => this.onSignUp(Response), (Error:any) => this.onError(Error));
  }

}
