import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'coming-soon',
  templateUrl: 'app/components/coming-soon/coming-soon.component.html',
  styleUrls:['app/components/coming-soon/coming-soon.component.css']
})
export class ComingSoonComponent {


  constructor(private params: ActivatedRoute){}

}
