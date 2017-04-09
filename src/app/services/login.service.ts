import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import { IUser } from "../interfaces/user";
import 'rxjs/Rx';


@Injectable()
export class LoginService {
  user: IUser = null;
  private loginManager: Subject<IUser> = new Subject<IUser>();

  constructor(private _http: Http) {
  }

  loginManagerEmmiter$ = this.loginManager.asObservable();

  loginManagerEmmit(user: IUser) {
    this.loginManager.next(user);
  }

  returnEmptyUser() {
    var userToReturn: IUser = {
      username: '',
      password: '',
      name: '',
      lastName: '',
      birthDate: '',
      school: '',
      gender: '',
      health: 0,
      magic: 0,
      strength: 0,
    };
    return userToReturn;
  }

  logIn(user: IUser) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post('http://localhost:3000/api/login', user, options).map((response: Response) => <IUser> response.json());
  }


  signUp(user: IUser) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post('http://localhost:3000/api/signup', user, options).map((response: Response) => <IUser> response.json());
  }
}
