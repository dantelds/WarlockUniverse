import { NgModule }           from '@angular/core';

import { WarlockComponent }     from './warlock.component';
import { WarlockService }       from './warlock.service';
import { WarlockRoutingModule } from './warlock-routing.module';

@NgModule({
  imports:      [ WarlockRoutingModule ],
  declarations: [ WarlockComponent ],
  providers:    [ WarlockService ]
})
export class WarlockModule { }
