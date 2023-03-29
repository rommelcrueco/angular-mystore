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
    if (this.validateCart()) {
      console.warn('Your order has been submitted', this.checkOutForm.value);
      this.items = this.cartService.clearCart();
      this.checkOutForm.reset();
      alert('Order successful!');
    }
  }


  validateCart(): boolean {
    // Validate the form:
    if(this.cartService.getItems().length === 0
      || this.checkOutForm.value.name === null 
      || this.checkOutForm.value.address === null
      || this.checkOutForm.value.name?.trim().length === 0 
      || this.checkOutForm.value.address?.trim().length === 0) {
      alert('Cart, Name, Address cannot be empty!');
      return false;
    }
    return true;
  }
}
