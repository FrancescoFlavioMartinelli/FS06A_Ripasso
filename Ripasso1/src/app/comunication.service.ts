import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  counter = 0

  counterSbj = new Subject<string>()
  counterObs = this.counterSbj.asObservable()

  constructor() { }

  aumenta(){
    this.counter++
    console.log(this.counter);
    this.counterSbj.next("NEXT")
  }

  getCounter() {
    return this.counter
  }

  getObs() {
    return this.counterObs;
  }

}
