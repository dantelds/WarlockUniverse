import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ComingSoonModule } from './components/coming-soon/coming-soon.module';
import { AppRoutingModule } from './app.routes';

import {LoginService} from './services/login.service';
import {WarlockService} from './services/warlock.service';

import { AppComponent }  from './app.component';
import { WarlockComponent } from './components/warlock/warlock.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/sign-up.component';

import { TRANSLATION_PROVIDERS }   from './language/lang';
import { TranslatePipe }   from './language/lang.pipe';
import { TranslateService }   from './services/language.service';

@NgModule({
  imports: [FormsModule, BrowserModule, HttpModule, JsonpModule, AppRoutingModule, ComingSoonModule ],
  declarations: [ TranslatePipe, AppComponent, MenuComponent, LoginComponent, WarlockComponent, SignUpComponent],
  bootstrap: [ AppComponent ],
  providers:    [ LoginService, WarlockService, TRANSLATION_PROVIDERS, TranslateService ]
})
export class AppModule { }
