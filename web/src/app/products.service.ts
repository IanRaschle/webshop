import { Injectable } from '@angular/core';
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];

  constructor() {
    this.products.push({
      id: 1,
      title: "RTX 4090",
      description: "Mega krasse Grafikkarte",
      pictures: [],
      price: 12.50,
      category: "Grafikkarte",
      remaining: 5, rating: 4.3
    });
    this.products.push({
      id: 2,
      title: "RTX 4080",
      description: "Krasse Grafikkarte",
      pictures: [],
      price: 10.50,
      category: "Grafikkarte",
      remaining: 3, rating: 4.3
    });
  }

  getProducts() {
    return this.products;
  }
}
