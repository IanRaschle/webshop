import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(public productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
