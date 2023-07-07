import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());

@Injectable({ providedIn: 'root' }) //decorador para que angular lo trate como un servicio
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7532,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

    onDeleteCharacterById (id:string) {
        //con filter
        this.characters = this.characters.filter( character => character.id !== id)
    }  

//   onDeleteCharacter(index: number): void {
//     this.characters.splice(index, 1);
//   }
}
