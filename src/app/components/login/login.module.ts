import { NgModule }           from '@angular/core';

import { LoginComponent }     from './login.component';
import { LoginService }       from './login.service';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports:      [ LoginRoutingModule ],
  declarations: [ LoginComponent ],
  providers:    [ LoginService ]
})
export class LoginModule { }
