import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent }  from './app.component';
import { CharacterModule } from './character/character.module';
import { ComingSoonModule } from './coming-soon/coming-soon.module';

import { AppRoutingModule } from './app.routes';


@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, AppRoutingModule, CharacterModule, ComingSoonModule ],
  declarations: [ AppComponent, MenuComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
