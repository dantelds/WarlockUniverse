import {Component} from '@angular/core';
import {ILink} from "./components/link/interfaces/link";
import {GeneralService} from './services/general.service';
import {TranslateService} from './services/language.service';
import {Router} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  logged: boolean = false;
  links: ILink[] = [{
    href: 'warlock',
    text: this._translate.instant('menu-warlock'),
    extraClass: ''
  }, {
    href: 'school',
    text: this._translate.instant('menu-school'),
    extraClass: ''
  }, {
    href: 'dungeon',
    text: this._translate.instant('menu-dungeons'),
    extraClass: ''
  }, {
    href: 'arena',
    text: this._translate.instant('menu-arena'),
    extraClass: ''
  }, {
    href: 'store',
    text: this._translate.instant('menu-store'),
    extraClass: ''
  }, {
    href: 'coming-soon',
    text: 'coming-soon',
    extraClass: ''
  }];

  constructor(private _translate: TranslateService, private GeneralService: GeneralService, private router: Router) {
    this.router.navigate(['/login']);
    this.createLoginListener();
  }

  private createLoginListener() {
    this.GeneralService.loginManagerEmmiter$.subscribe(User => {
      this.onUserLogin();
    });
  }

  private onUserLogin() {
    this.logged = true;
    this.router.navigate(['/warlock']);
  }


  onModuleClicked(module: ILink) {
    console.log('soy el modulo pulsado', module);
  }


}
