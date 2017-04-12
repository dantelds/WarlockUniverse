import {NgModule}           from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {GearComponent} from "./gear.component";


@NgModule({
  imports:[CommonModule, SharedModule],
  declarations:[GearComponent],
  exports:[GearComponent],
})
export class GearModule {
  constructor(){
  }
}
