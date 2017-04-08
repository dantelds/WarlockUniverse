import {Component, OnInit} from '@angular/core';
import {WarlockService, Warlock} from './warlock.service';


@Component({
  selector: 'warlock',
  templateUrl: 'app/components/warlock/warlock.component.html',
  styleUrls: ['app/components/warlock/warlock.component.css']
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
