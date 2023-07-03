import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = ['Spuiderman', 'Iroman', 'Hulk', 'Thor'];
  public deletedHero?: string 
  //borrar ultimo hero
  removeHero(): void {
    this.deletedHero = this.heroNames.pop();
    // console.log({deletedeHero})
  }
}
