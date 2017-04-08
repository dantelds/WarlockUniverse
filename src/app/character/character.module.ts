import { NgModule }           from '@angular/core';

import { CharacterComponent }     from './character.component';
import { CharacterService }       from './character.service';
import { CharacterRoutingModule } from './character-routing.module';

@NgModule({
  imports:      [ CharacterRoutingModule ],
  declarations: [ CharacterComponent ],
  providers:    [ CharacterService ]
})
export class CharacterModule { }
