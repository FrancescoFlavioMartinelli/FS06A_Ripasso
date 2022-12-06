import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


const routeSecond: Routes = [
  {
    path: 'child/:x/:y/:z', // second/child/:x
    component: ChildComponent
  }
]

const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'second',
    component: SecondComponent,
    children: routeSecond
  },
  {
    path: 'first/child',
    component: ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
