import { Component, OnInit } from '@angular/core';
import { UsmservicesService } from '../services/usmservices.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  student: string
  depart: string

  constructor(
    private userService: UsmservicesService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  adduser() {
    const userObj = {
      name: this.student,
      depart: this.depart
    }
    this.userService.createUsers(userObj).subscribe(
      data=>{
        this.router.navigate(['/index']);
      },
      error=>{
        console.log('error',error);
      }
    )
 
  }

}
