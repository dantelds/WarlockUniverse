import {Component, } from '@angular/core';
import {LoginService, User} from './login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.component.html',
  styleUrls: ['app/components/login/login.component.css']
})
export class LoginComponent{

  user: User = new User('', '');
  error: string = null;

  constructor(private LoginService: LoginService) {
  }
  onLogin(user:User){
    this.error = null;
    this.LoginService.user = user;
    this.LoginService.loginManagerEmmit(user);
  }
  onError(error:any){
    this.error = error._body;
  }
  login(){
    this.LoginService.logIn(this.user).subscribe(User => this.onLogin(User), Error => this.onError(Error));
  }

}
