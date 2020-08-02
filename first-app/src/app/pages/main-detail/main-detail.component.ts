import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css']
})
export class MainDetailComponent implements OnInit {
  name: string;
  constructor(
    private arouter: ActivatedRoute
  ) {
    const pathParams = this.arouter.snapshot.params;
    console.log('pathParams',pathParams);
    this.name = pathParams.id;
   }

  ngOnInit() {
  }

}
