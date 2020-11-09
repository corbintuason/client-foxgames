import { Injectable } from '@angular/core';
import { Game } from "../models/game";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  products: Game[] = [];
  constructor(private http: HttpClient) { }
  
  getProducts(params): Observable <Game[]> {
       return this.http.get<Game []>("http://localhost:3000/games", {
        params:{
          name: params.name
        }
      });
    
  
  }

  getGame(id){
    return this.http.get<Game>("http://localhost:3000/game/"+id);
  }
}
