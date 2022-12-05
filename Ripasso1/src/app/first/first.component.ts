import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  c:number = 0

  constructor(private cs:ComunicationService) { }

  ngOnInit(): void {
    this.getUpdates()
  }

  visualizza() {
    return this.cs.getCounter()
  }

  updateCounter() {
    this.c = this.visualizza()
  }

  getUpdates() {
    this.cs.getObs().subscribe((e)=>{
      console.log(e);
      this.updateCounter();
    })
  }
}
