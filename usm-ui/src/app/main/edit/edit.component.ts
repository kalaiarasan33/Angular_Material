import { Component, OnInit } from '@angular/core';
import { UsmservicesService } from '../services/usmservices.service'
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student: string
  depart: string
  dataobj_data: any
  id: string

  constructor(
    private userService: UsmservicesService,
    private router: Router,
    private arouter: ActivatedRoute
  ) {
    this.dataobj_data = window.history.state.data;
    this.student = this.dataobj_data.name
    this.depart = this.dataobj_data.depart
    this.id = this.dataobj_data.id
       
   
   }

  ngOnInit() {
  }
  updateuser(id) {
    const userObj = {
      name: this.student,
      depart: this.depart
    }
    this.userService.updateUsers(id,userObj).subscribe(
      data=>{
        this.router.navigate(['/index']);
      },
      error=>{
        console.log('error',error);
      }
    )
 
  }
 

}
