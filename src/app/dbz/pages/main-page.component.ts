import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponents  {
    public characters: Character[] = [{
        name:'Krilin',
        power:1000
    },{
        name:"Goku",
        power:9500,
    },{
        name:"Vegeta",
        power:7532
    }]

    onNewCharacter( character: Character): void {
        console.log('MainPage')
        console.log(character)
    }
}