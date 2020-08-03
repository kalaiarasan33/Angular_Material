import { Injectable } from '@angular/core';
import { range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

todoArr:Array<any> = [{"name":"Test","done":false}];

todo: string


constructor() { }

getTodo(){
  return this.todoArr

}

addTodo(todo: string){

  const todoObj = {
    name: todo,
    done: false
  }
  this.todoArr.push(todoObj);
  
}

removeTodo(i: any){
  this.todoArr.splice(i,1);
}

striketodd(todoobj: any){  
  todoobj.done = true
} 
}
