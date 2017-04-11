import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Subject}    from 'rxjs/Subject';
import {IUser} from "../interfaces/user";
import 'rxjs/Rx';


@Injectable()
export class GeneralService {
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

  apiCall(action:string, url:string,  body:Object){
    url = 'http://localhost:3000/api/' + url;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    if(action === 'get' || action === 'delete'){
      return this._http[action](url, options).map((response: Response) => <any> response.json());
    }
    else {
      return this._http[action](url, body, options).map((response: Response) => <any> response.json());
    }
  }
}
