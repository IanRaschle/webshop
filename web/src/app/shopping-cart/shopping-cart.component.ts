import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = [];

  constructor(public productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

}
