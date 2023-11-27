import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product!: Product;
  @Input()
  inShoppingCart = false;
  @Output()
  addToCart = new EventEmitter<Product>();
  @Output()
  removeFromCart = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
