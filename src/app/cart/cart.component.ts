import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../app-services/cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: Product[] = this.cartService.getItems();


  checkOutForm = this.formBuilder.group({
    name: '',
    address: ''
  });


  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  
  onSubmit() {
    // Process checkout data here:
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkOutForm.value);
    this.checkOutForm.reset();
  }
}
