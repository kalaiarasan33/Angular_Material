import { Component, OnInit } from '@angular/core';
import { UsmservicesService } from './services/usmservices.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listuserArr: Array<any> = [];

  

  constructor(
    private userService: UsmservicesService,
    private router: Router

  ) { 
    
  }

  ngOnInit() {
    this.allusers()

}
  
  deleteuser(id){
    this.userService.deleteUser(id).subscribe(
      (data:any)=>{
        console.log('data',data)
        this.allusers()
      },
      (error:any)=>{
        console.log('error',error)
      }
    )
  } 
  allusers(){
    this.userService.getUsers().subscribe(
     (data:any)=>{
       console.log('data',data)
       this.listuserArr = data.data;
      
     },
     error=>{
       console.log('error',error)
     }
   )
 }     
  
 onMainNavigate(item){
  this.router.navigate(['/edit'], {state:{ data: item} })
}

}
