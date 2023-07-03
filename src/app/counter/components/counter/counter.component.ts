import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>

    <button (click)="updateCounter(1)">Increment</button>
    <button (click)="reset()">Reset</button>
    <button (click)="updateCounter(-1)">Decrement</button>`,
})
export class CounterComponent {
  constructor() {}
  public counter: number = 10;

  updateCounter(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
