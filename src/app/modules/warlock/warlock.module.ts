import {NgModule}           from '@angular/core';
import {WarlockRoutingModule} from './warlock-routing.module';
import { WarlockComponent }    from './warlock.component';
import {SharedModule}   from '../../shared/shared.module';


@NgModule({
  declarations:[WarlockComponent],
  imports: [WarlockRoutingModule, SharedModule]
})
export class WarlockModule {
  constructor(){
  }
}
