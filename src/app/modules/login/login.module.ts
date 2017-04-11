import {NgModule}           from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import { LoginComponent }    from './login.component';
import {SharedModule}   from '../../shared/shared.module';
import {MenuModule} from '../../components/menu/menu.module';




@NgModule({
  declarations:[LoginComponent],
  imports: [LoginRoutingModule, SharedModule, MenuModule]
})
export class LoginModule {
  constructor(){
  }
}
