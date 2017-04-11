import {NgModule}           from '@angular/core';
import {SchoolRoutingModule} from './school-routing.module';
import { SchoolComponent }    from './school.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations:[SchoolComponent],
  imports: [SchoolRoutingModule, SharedModule]
})
export class SchoolModule {
  constructor(){
  }
}
