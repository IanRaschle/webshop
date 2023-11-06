import { Component } from '@angular/core';
import {Product} from "./product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PC Shop';
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
}
