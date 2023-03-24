import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../app-services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    // First, get the productId from the current route:
    const routeParams: ParamMap = this.route.snapshot.paramMap;
    const productIdFromRoute: number = Number(routeParams.get('productId'));
    
    // Find the product that corresponds to the Id provided in the route:
    this.product = products.find(p => p.id === productIdFromRoute);
  }

  // Cart Methods:
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
