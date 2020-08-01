import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls:['./profile-card.component.css']
})

export class ProfileCardComponent implements OnInit {
    @Input() posts: Array<any> = [];
    @Input('isAdmin') admin: boolean = false;
    @Output() onPurchase = new EventEmitter();
    

    constructor() { }

    ngOnInit() { }

    onLike(obj){
        obj.like++;
    }

    onBuy(obj){
        this.onPurchase.emit(obj);
    }
}