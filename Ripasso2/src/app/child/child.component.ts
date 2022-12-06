import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  x:any = 0
  y:any = 0
  z:any = 0

  arSub!:Subscription

  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    // this.x = this.ar.snapshot.params['x']
    this.arSub = this.ar.params.subscribe((p)=>{
      this.x = p["x"]
      this.y = p["y"]
      this.z = p["z"]
    })

  }

  ngOnDestroy(): void {
    this.arSub.unsubscribe();
  }

}
