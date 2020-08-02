import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent  {

  constructor(
    private router: Router
  ){

  }
  onMainNavigate(){
    this.router.navigate(['/main'],{ queryParams: { id: '23234', name: 'chandru'}, state:{ data: { 'name':'hardhik',age:0}} })
  }

}
