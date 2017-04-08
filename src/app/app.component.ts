import { Component } from '@angular/core';
import {ILink} from "./interfaces/link";
@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent {
  logged:boolean = false;
  onModuleClicked(module:ILink){
    console.log('soy el modulo pulsado',module);
  }
}
