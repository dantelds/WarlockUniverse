import { Component  } from '@angular/core';
import { ILink } from "./interfaces/link";
import { LoginService } from './services/login.service';
import { TranslateService } from './services/language.service';
import { Router } from '@angular/router';
@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent {
  logged:boolean = false;

  constructor(private _translate: TranslateService, private LoginService: LoginService, private router: Router) {
    this.router.navigate(['/login']);
    LoginService.loginManagerEmmiter$.subscribe(User => {
      this.logged = true;
      this.router.navigate(['/warlock']);
    });
  }


  onModuleClicked(module:ILink){
    console.log('soy el modulo pulsado',module);
  }
}
