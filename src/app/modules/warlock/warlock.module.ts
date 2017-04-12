import {NgModule}           from '@angular/core';
import {WarlockRoutingModule} from './warlock-routing.module';
import { WarlockComponent }    from './warlock.component';
import {SharedModule}   from '../../shared/shared.module';
import {GearModule} from "../../components/gear/gear.module";


@NgModule({
  declarations:[WarlockComponent],
  imports: [WarlockRoutingModule, SharedModule, GearModule]
})
export class WarlockModule {
  constructor(){
  }
}
