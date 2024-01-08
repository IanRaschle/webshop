import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  total: number = 0;

  constructor(public productsService: ProductsService) {
  }

  ngOnInit(): void {
  }

  getTotal() {
    let total = 0;
    this.productsService.getProducts()
      .filter((product) => this.productsService.getShoppingCart().includes(product.id))
      .forEach(product => total += product.price);
    return total;
  }
}
