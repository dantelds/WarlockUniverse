import { Component } from '@angular/core';
import {ILink} from "./interfaces/link";
import {LoginService} from './components/login/login.service';
import {Router} from '@angular/router';
@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent {
  logged:boolean = false;
  constructor(private LoginService: LoginService, private router: Router) {
    this.router.navigate(['login']);
    LoginService.loginManagerEmmiter$.subscribe(User => {
      this.logged = true;
      this.router.navigate(['warlock']);
    });
  }
  onModuleClicked(module:ILink){
    console.log('soy el modulo pulsado',module);
  }
}
