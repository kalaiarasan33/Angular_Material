import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app.service'
import { UserService } from '../../shared/services/user.service'

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  name: string = 'Fifa'
  currentDate: Date = new Date();
  tempObj = {
    name:'steve',
    age:50
  }
 num:number = 1

  monthArr: Array<string> = ['JAN','FEB','MAR','APR','MAY','JUN','JUL']
  filterText: string;
  somePlaceholder: string = "Add todo list"
  TodoArr: Array<any> = [];
  userArr: Array<any> = [];
  todo: string
  constructor(
    private appService: AppService,
    private userService: UserService
    
  ) {

    this.TodoArr =  this.appService.getTodo();   
    this.userService.getUser().subscribe(
      (data:any)=>{
        this.userArr = data;
        console.log('data',data)
      },
      error=>{
        console.log('error',error)
      }
    )

    
    
    
   }
   
   addtodo(e: any){
    this.appService.addTodo(this.todo);
    this.todo = ''
    this.TodoArr = this.appService.getTodo();
   }

   strike(todoobj: any) {    
    this.appService.striketodd(todoobj);    
    this.TodoArr = this.appService.getTodo();

  }

  Removetodo(i: any) {    
    this.appService.removeTodo(i);   
    this.TodoArr = this.appService.getTodo(); 

  }
  


  ngOnInit() {
  }

}
