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
  public supportedLanguages: any[];
  logged:boolean = false;
  constructor(private _translate: TranslateService, private LoginService: LoginService, private router: Router) {
    this.router.navigate(['/login']);
    LoginService.loginManagerEmmiter$.subscribe(User => {
      this.logged = true;
      this.router.navigate(['/warlock']);
    });
  }

  ngOnInit() {
    var language:string=navigator.language;
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es'}
    ];
    if(language !== 'es' && language !== 'en'){
      language = 'en';
    }
    this.selectLang(language);
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    this._translate.use(lang);
  }



  onModuleClicked(module:ILink){
    console.log('soy el modulo pulsado',module);
  }
}
