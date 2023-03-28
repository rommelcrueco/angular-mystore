import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../app-services/cart.service';
import { IShippingPrice } from '../app-interfaces/IShippingPrice';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts !: Observable<IShippingPrice[]>;


  constructor(
    private cartService: CartService
  ) {}


  ngOnInit(): void{
    this.shippingCosts = this.cartService.getShippingPrices()
  }
}
