import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GeneralService} from '../../services/general.service';

@Component({
  selector: 'coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls:['./coming-soon.component.css']
})
export class ComingSoonComponent {


  constructor(private params: ActivatedRoute, private GeneralService: GeneralService){
    console.log('current user-------->', this.GeneralService.user);
  }

}
