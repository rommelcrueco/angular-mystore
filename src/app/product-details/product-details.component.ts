import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // First, get the productId from the current route:
    const routeParams: ParamMap = this.route.snapshot.paramMap;
    const productIdFromRoute: number = Number(routeParams.get('productId'));
    
    // Find the product that corresponds to the Id provided in the route:
    this.product = products.find(p => p.id === productIdFromRoute);
    console.log('product', this.product)

  }
}
