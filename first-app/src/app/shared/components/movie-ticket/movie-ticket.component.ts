import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-ticket',
  templateUrl: './movie-ticket.component.html',
  styleUrls: ['./movie-ticket.component.css']
})
export class MovieTicketComponent implements OnInit {
  @Input() movielist: Array<any> = [];
  book:boolean = false
  @Output() ticketPurchasedetails = new EventEmitter();
  count:number
 


  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  onBook() {
    this.book = true;
 
  }
  onCancel(){
    this.book = false;
 
  }
  onPurchasedetails(obj){
    obj.ticket = this.count;
    this.ticketPurchasedetails.emit(obj);
    this.count = null;
}

onMainNavigate(obj){

  this.router.navigate(['/movie-details'],{state:{ data: { 'name': obj.name,'actor': obj.actor,'director': obj.director}} })
  
  
}

}