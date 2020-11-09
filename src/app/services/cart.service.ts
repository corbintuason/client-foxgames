import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { Cart } from "../models/cart";

import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  constructor(private http: HttpClient) { }
  
  addCart(product): Observable <Cart> {
    console.log("checking product", product._id);
    return this.http.post<Cart>("http://localhost:3000/cart", {
      game: product._id
    });
  }

  getCart(): Observable <Cart[]> {
    return this.http.get<Cart[]>("http://localhost:3000/carts");
  }
}
