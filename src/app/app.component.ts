import {Component} from '@angular/core';
import {ILink} from "./interfaces/link";
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
    text: this._translate.instant('menu-warlock')
  }, {
    href: 'school',
    text: this._translate.instant('menu-school')
  }, {
    href: 'dungeon',
    text: this._translate.instant('menu-dungeons')
  }, {
    href: 'arena',
    text: this._translate.instant('menu-arena')
  }, {
    href: 'store',
    text: this._translate.instant('menu-store')
  }, {
    href: 'coming-soon',
    text: 'coming-soon'
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
