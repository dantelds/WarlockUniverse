import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {ComingSoonModule} from './components/coming-soon/coming-soon.module';
import {AppRoutingModule} from './app.routes';


import {TRANSLATION_PROVIDERS}   from './language/lang';
import {TranslatePipe}   from './language/lang.pipe';
import {TranslateService}   from './services/language.service';
import {LoginService} from './services/login.service';

import {AppComponent}  from './app.component';
import {ArenaComponent} from './components/arena/arena.component';
import {DungeonComponent} from './components/dungeon/dungeon.component';
import {LoginComponent} from './components/login/login.component';
import {MenuComponent} from './components/menu/menu.component';
import {SchoolComponent} from './components/school/school.component';
import {SignUpComponent} from './components/signup/sign-up.component';
import {StoreComponent} from './components/store/store.component';
import {WarlockComponent} from './components/warlock/warlock.component';


@NgModule({
  imports: [FormsModule, BrowserModule, HttpModule, JsonpModule, AppRoutingModule, ComingSoonModule],
  declarations: [AppComponent, ArenaComponent, DungeonComponent, LoginComponent, MenuComponent, SchoolComponent, SignUpComponent, StoreComponent, TranslatePipe, WarlockComponent],
  bootstrap: [AppComponent],
  providers: [LoginService, TRANSLATION_PROVIDERS, TranslateService]
})
export class AppModule {
}
