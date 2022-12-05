import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  counter = 0

  @Input() testo = "click"

  @Output() aumentaEvent = new EventEmitter();
  @Output() aumentaEventParam = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  aumenta() {
    this.aumentaEvent.emit();
  }
  aumentaParams() {
    this.counter++
    console.log(this.testo, this.counter);
    
    this.aumentaEventParam.emit(this.counter);
  }

}
