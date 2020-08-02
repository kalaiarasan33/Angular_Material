import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  public firstname = 'kalaiarasan';
  public lastname = 'balaraman';
  toShow: boolean = true;
  pcolor: string = "red";
  isError: boolean = false;
  makeYellow: boolean = false;
  nameArr: Array<string> = ['Balaraman', 'Amudha', 'Chandru', 'Kalai', 'Gomathi', 'Hardhik'];
  praccolor: string
  changecolors: boolean
  srcURL: any
  Angular: any = "data:image/png;base64,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"
  Golang: any = "data:image/png;base64,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"
  isAngular: boolean = true
  name: string = "kishore"
  somePlaceholder: string = "Add todo list"
  TodoArr: Array<any> = [];
  todo: string
  postArr: Array<any> = [
    {
      banner: 'https://images.unsplash.com/photo-1596047795504-97e417ae0a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      name: 'Marjory',
      like: 0,
      comment: 0
    },
    {
      banner: 'https://images.unsplash.com/photo-1590435753380-980ddc8f6099?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1041&q=80',
      name: 'Maximillian',
      like: 10,
      comment: 0
    }
  ]

  movieArr: Array<any> = [
    {
      banner: "https://images.indianexpress.com/2020/01/master-third-look-1200.jpg",
      name: 'Master',
      ticket: 0,
      actor: "vijay",
      director: "lokesh"

    },
    {
      banner: "https://i.ytimg.com/vi/kpc0_Zpxxwc/maxresdefault.jpg",
      name: 'Annathai',
      ticket: 0,
      actor: "rajini",
      director: "siva"
    }
  ]
  cartCount: number = 0;
  cartArr: Array<any> = [];
  ticketArr: Array<any> = [];

  constructor() {

  }

  ngOnInit() {
    setTimeout(() => {
      this.firstname = 'kalai';
      this.makeYellow = true;
      this.toShow = !false;
      this.praccolor = "blue";
      this.srcURL = this.Angular;
    }, 2000)
  }

  addName() {
    this.nameArr.push(this.name);
    this.name = '';
  }

  onRemove(index: number) {
    this.nameArr.splice(index, 1);
  }

  onKeyUp(e: any) {
    console.log('e', e);
    this.name = e.target.value;

  }

  onModelChange(e: any) {
    console.log('e', e);
    this.name = e
  }
  changecolor(co: string) {
    this.praccolor = co;
    this.changecolors = co == "red" ? true : false;
  }
  changeimage() {
    this.isAngular = !this.isAngular;
    this.srcURL = this.isAngular ? this.Angular : this.Golang;
  }

  addtodo(e: any) {
    console.log('e', e);
    const todoObj = {
      name: this.todo,
      done: false
    }
    this.TodoArr.push(todoObj);
    this.todo = '';
  }
  strike(todoobj: any) {
    todoobj.done = true

  }

  onBuy($event) {
    this.cartCount++;
    this.cartArr.push($event);
  }
  onPurchasedetails($event) {
    this.ticketArr.push($event)
  }

}
