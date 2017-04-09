import {Component, OnInit} from '@angular/core';
import {WarlockService, Warlock} from '../../services/warlock.service';


@Component({
  selector: 'warlock',
  templateUrl: './warlock.component.html',
  styleUrls: ['./warlock.component.css']
})
export class WarlockComponent implements OnInit {

  warlock: Warlock = null;
  warlockName: String = '';

  constructor(private WarlockService: WarlockService) {
  }

  ngOnInit() {
    this.WarlockService.getWarlockName().subscribe(warlockName => this.warlockName = warlockName);
  }
}
