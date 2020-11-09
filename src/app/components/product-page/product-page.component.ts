import { Component, OnInit } from '@angular/core';
import { GameService } from "src/app/services/game.service";
import { Game } from "src/app/models/game";
import { MessengerService } from "src/app/services/messenger.service"; 
import { SearchService } from "src/app/services/search.service"; 
import {Router, ActivatedRoute, Params} from '@angular/router';

import { CartService } from "src/app/services/cart.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  game: Game;
  id: String;

  constructor( private gameService: GameService, private searchService: SearchService, private route: ActivatedRoute, private cartService: CartService, private messengerService: MessengerService, private router: Router) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    // Load Game
    this.loadGame();
  }

  loadGame(){
    this.gameService.getGame(this.id).subscribe(game => {
      console.log(game);
      this.game = game;
    });
  }

  addToCart(){
    let cart = this.cartService.addCart(this.game).subscribe(game => {
      this.messengerService.sendMsg(game)
      // Go Back to Home Page
      this.router.navigate(['/']);

    });
  
    }


}

