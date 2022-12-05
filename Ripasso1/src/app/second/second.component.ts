import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private cs:ComunicationService) { }

  ngOnInit(): void {
  }

  aumenta() {
    this.cs.aumenta()
  }

}
