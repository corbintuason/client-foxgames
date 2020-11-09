import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { HostListener  } from "@angular/core";
import { MessengerService } from "src/app/services/messenger.service"; 
import { Game } from "src/app/models/game";
import { Cart } from "src/app/models/cart";

import { isForOfStatement } from 'typescript';

import { CartService } from "../../services/cart.service"; 
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  items = [];
  total_quantity = 0;

  total = 0;
  
  constructor(private message: MessengerService, private cartService: CartService) { }

  ngOnInit(): void {

    // Initial Load of Cart Items
    this.loadItems();

    // When a product is added to cart, reload the items
    this.message.getMsg().subscribe((product: Game) => {
      this.loadItems();
    });
  }

  loadItems(){
    this.items = [];
    this.cartService.getCart().subscribe(cart => {
      console.log("ano lmaan ng cart", cart);
      // Add Product to Cart
      cart.forEach(cart => {
        this.addProductToCart(cart);
      });
      // Recompute Total Quantity
      this.getTotalQuantity();
    });
  }
  addProductToCart(cart: Cart){
    console.log("dapat id and game lang", cart);
    // Check if product is in items
    var same_product = this.productInCart(cart);
    if(same_product){
      same_product.quantity++;
    }else{
      this.addNewProduct(cart);
    }

    this.calculateTotal();
  }

  productInCart(cart: Cart){
    return this.items.find(item => item.product_id == cart.game._id);
  }
  
  addNewProduct(cart: Cart){
    console.log("CART??", cart);
    this.items.push({
      'product_id' : cart.game._id,
      'product_name': cart.game.name, 
      "quantity": 1,
      "price": cart.game.price,
      'img_url': cart.game.img_url
    });
  }

  calculateTotal(){
    this.total = 0;
    this.items.forEach(item => {
      let quantity = item.quantity;
      let price = item.price;
      this.total+= quantity*price;
    });
  }

  getTotalQuantity(){
    let total_quantity = 0;
    this.items.forEach(item => {
      total_quantity += item.quantity;
    });
    this.total_quantity = total_quantity;
  }

  @HostListener("click") onClick(){
    console.log("User Click using Host Listener")
  }

}
