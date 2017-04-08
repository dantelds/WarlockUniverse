import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

export class User {
  constructor(public username: string, public password: string) {}
}

@Injectable()
export class LoginService {
  constructor(private _http: Http){

  }
  logIn() {
    return  this._http.get('http://localhost:3000/api/warlock').map((response: Response) => <User> response.json());
  }
  // signUp(user:Object) {
  //   let headers      = new Headers({ 'Content-Type': 'application/json' });
  //   let options       = new RequestOptions({ headers: headers });
  //   return  this._http.post('http://localhost:3000/api/warlock', user, options).map((response: Response) => <User> response.json());
  // }
}
