import {NgModule}           from '@angular/core';
import {MenuComponent} from './menu.component';
import { RouterModule }        from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[RouterModule, CommonModule],
  declarations:[MenuComponent],
  exports:[MenuComponent],
})
export class MenuModule {
  constructor(){
  }
}
