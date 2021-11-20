import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  title = "TESTE JAVA 4 "
  counter = 0
  text = ""

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter++
    if(this.counter > 10){
      this.text = "Maior que 10"
    }
  }

}
