import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  c:number = 0;

  constructor(private cs:ComunicationService) { }

  ngOnInit(): void {
    this.cs.getObs().subscribe((e)=>{
      this.c += 2
    })
  }
  
  diminuisciCounter(e:number) {
    this.c--
  }

  aumentaCounter(e:number) {
    this.c++
  }
  aumentaEventParam(e:number){
    this.c = e
  }

}
