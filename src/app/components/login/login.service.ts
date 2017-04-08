import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject }    from 'rxjs/Subject';

export class User {
  constructor(public username: string, public password: string) {}
}

@Injectable()
export class LoginService {
  user:User=null;
  private loginManager:Subject<User> = new Subject<User>();
  constructor(private _http: Http){
  }

  loginManagerEmmiter$ = this.loginManager.asObservable();

  loginManagerEmmit(user: User)
  {
    this.loginManager.next(user);
  }

  logIn(user:Object) {
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });
    return  this._http.post('http://localhost:3000/api/login', user, options).map((response: Response) => <User> response.json());
  }
}
