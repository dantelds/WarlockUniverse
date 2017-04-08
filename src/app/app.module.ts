import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent }  from './app.component';
import { WarlockModule } from './components/warlock/warlock.module';
import { LoginModule } from './components/login/login.module';
import { ComingSoonModule } from './components/coming-soon/coming-soon.module';

import { AppRoutingModule } from './app.routes';


@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, AppRoutingModule, WarlockModule, ComingSoonModule, LoginModule ],
  declarations: [ AppComponent, MenuComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
