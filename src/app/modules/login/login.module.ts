import {NgModule}           from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import { LoginComponent }    from './login.component';
import {SharedModule}   from '../../shared/shared.module';
import {InputModule} from '../../components/input/input.module';




@NgModule({
  declarations:[LoginComponent],
  imports: [LoginRoutingModule, SharedModule, InputModule]
})
export class LoginModule {
  constructor(){
  }
}
