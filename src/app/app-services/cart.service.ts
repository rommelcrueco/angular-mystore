import { Injectable } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';
import { IShippingPrice } from '../app-interfaces/IShippingPrice';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  // Cart methods:
  addToCart(product: Product) {
    this.items.push(product);    
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // Shipping prices methods:
  getShippingPrices() {
    return this.http.get<IShippingPrice[]>('../../assets/shipping.json');
  }

}
