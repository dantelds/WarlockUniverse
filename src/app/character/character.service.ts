import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

export class Character {
  constructor(public id: number, public name: string) { }
}

const CHARACTERS: Character[] = [
  new Character(1, 'Sam Spade')
];

const FETCH_LATENCY = 500;

@Injectable()
export class CharacterService {
  constructor(private _http: Http)
  {

  }
  // getCharacters() {
  //   return new Promise<Character[]>(resolve => {
  //     setTimeout(() => { resolve(CHARACTERS); }, FETCH_LATENCY);
  //   });
  // }

  getCharacter() {
    return  this._http.get('backend/characters.json').map((response: Response) => <Character[]> response.json());
  }

  // getCharacter(id: number | string) {
  //   return this.getCharacters()
  //     .then(characters => characters.find(character => character.id === +id));
  // }
}
