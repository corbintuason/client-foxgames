import { Component, OnInit } from '@angular/core';
import { GameService } from "src/app/services/game.service";
import { Game } from "src/app/models/game";
import { MessengerService } from "src/app/services/messenger.service"; 
import { SearchService } from "src/app/services/search.service"; 

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[]  = [];
  search: String = '';
  filters = [];
  constructor(private message: MessengerService, private gameService: GameService, private searchService: SearchService) { }

  ngOnInit(): void {
    // Load initial
    this.loadGames();

    // Listen for a new product
    this.message.getMsg().subscribe((game: Game) => {
      this.loadGames();
    });

    // Listen for a search
    this.searchService.getSearchQuery().subscribe((search: String) => {
      console.log("a search happened", search);
      this.search = search;
      this.loadGames();
    })
  }

  loadGames(){
    let params = {
      name: this.search,
      filters: this.filters
    };
    this.gameService.getProducts(params).subscribe(games => {
      this.games = games;
    });
  }

}
