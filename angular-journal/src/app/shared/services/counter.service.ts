import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter: number = 0
  constructor() { }

  increment() {
    return this.counter += 1
  }

  decrement() {
    return this.counter -= 1
  }
}
