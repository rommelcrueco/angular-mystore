import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../app-services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  // todo: create the type of the object!
  shippingCosts !: Observable<{type: string, price: number }[]>;


  constructor(
    private cartService: CartService
  ) {}


  ngOnInit(): void{
    this.shippingCosts = this.cartService.getShippingPrices()
  }
}
