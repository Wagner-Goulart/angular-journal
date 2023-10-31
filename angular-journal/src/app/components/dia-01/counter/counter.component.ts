import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number = 0

  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
  }

  increment(){
     return this.counter = this.counterService.increment()

  }

  decrement() {
    return this.counter = this.counterService.decrement()
  }

}
