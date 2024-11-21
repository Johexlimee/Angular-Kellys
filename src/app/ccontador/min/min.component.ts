import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html',
  styleUrl: './min.component.css'
})
export class MinComponent {
  @Input()
  counterMin:number=0;

  @Output()
  emitMin: EventEmitter<number> = new EventEmitter();

  decrement():void{
    this.counterMin--;
  }
}
