import {Component, OnInit} from '@angular/core';
import { CharacterService, Character } from './character.service';


@Component({
  selector: 'character',
  templateUrl: 'app/character/character.component.html',
  styleUrls:['app/character/character.component.css']
})
export class CharacterComponent  implements OnInit{

  userCharacter:Character = null;
  name:String = '';

  constructor(private characterService: CharacterService) {
  }
  ngOnInit() {
    this.characterService.getCharacter().subscribe(
      function(characters){
        this.userCharacter = characters[0];
        this.name = this.userCharacter.name;
        console.log('this.name-->', this.name);
      });
}


}
