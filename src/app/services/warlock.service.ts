import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

export class Warlock {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class WarlockService {
  constructor(private _http: Http)
  {

  }


  getWarlock() {
    return  this._http.get('http://localhost:3000/api/warlock').map((response: Response) => <Warlock[]> response.json());
  }
  getWarlockName() {
    return  this._http.get('http://localhost:3000/api/warlock').map(function(response: Response){
      var warlocks: Array<Warlock> = response.json();
      if (warlocks[0]) {
        return warlocks[0].name;
      }
      else {
       return 'no encontrado';
      }
    });
  }

}
