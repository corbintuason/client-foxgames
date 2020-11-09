import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { CartService } from "src/app/services/cart.service";
import { Cart } from "src/app/models/cart";

import { MessengerService } from "src/app/services/messenger.service";

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
  styleUrls: ['./game-modal.component.css'],
})
export class GameModalComponent implements OnInit {
  cart_endpoint: "http://localhost:3000/cart";
  
  @Input() game;

  constructor(public activeModal: NgbActiveModal, private cartService: CartService, private messengerService: MessengerService) { }

  ngOnInit(): void {
    console.log("mounted", this.game);
  }

  addToCart(){
  let cart = this.cartService.addCart(this.game).subscribe(game => {
    this.messengerService.sendMsg(game)
    // close modal
    this.activeModal.close();
  });

  }

}
