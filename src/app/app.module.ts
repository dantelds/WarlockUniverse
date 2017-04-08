import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ComingSoonModule } from './components/coming-soon/coming-soon.module';
import { AppRoutingModule } from './app.routes';

import {LoginService} from './components/login/login.service';
import {WarlockService} from './components/warlock/warlock.service';

import { AppComponent }  from './app.component';
import { WarlockComponent } from './components/warlock/warlock.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [FormsModule, BrowserModule, HttpModule, JsonpModule, AppRoutingModule, ComingSoonModule ],
  declarations: [ AppComponent, MenuComponent, LoginComponent, WarlockComponent],
  bootstrap: [ AppComponent ],
  providers:    [ LoginService, WarlockService ]
})
export class AppModule { }
