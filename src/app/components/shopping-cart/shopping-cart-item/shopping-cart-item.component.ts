import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item: any;
  constructor() { }
  
  total_price = 0;
  ngOnInit(): void {
    this.total_price = this.item.price * this.item.quantity;
    console.log("item?", this.item);
  }

}
