import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  {
  movieobj = <any>{};
  obj = <any>{};

  constructor(
    private arouter: ActivatedRoute,
    private router: Router   
    
  ){

    console.log('this.arouter.snapshot',window.history.state);
    this.obj =  window.history.state.data;
   
    if (this.obj != null){
  
    this.movieobj = window.history.state.data;
  }else{
    this.router.navigate(['/'])
  }

  }
 

}
