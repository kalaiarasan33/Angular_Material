import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dataObj = <any>{};
  dataobj_data = <any>{};
  constructor(
    private router: Router,
    private arouter: ActivatedRoute
  ) {
    console.log('this.arouter.snapshot',window.history.state);
    this.dataObj = this.arouter.snapshot.queryParams;
    this.dataobj_data = window.history.state.data;
   }

  ngOnInit() {
  }

  onDetailPage(){
    this.router.navigate(['/main-detail','kalai'])
  }

}
