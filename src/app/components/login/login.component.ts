import {Component} from '@angular/core';
import {LoginService, User} from './login.service';


@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.component.html',
  styleUrls: ['app/components/login/login.component.css']
})
export class LoginComponent{

  user: User = new User('','');

  constructor(private LoginService: LoginService) {
  }

  login(){
    console.log('hago login');
  }

}
