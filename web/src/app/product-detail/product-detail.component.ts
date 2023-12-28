import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {Product} from "../product";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);

  id$ = this.route.params.pipe(map((params) => params['id']));
  product?: Product;
  products?: Product[];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.productsService.loadProducts().subscribe({
      next: value => {
        this.products = value._embedded.products;
        this.id$.subscribe(id => this.product = this.products?.find(product => product.id == id));
      }
    });
  }

  addToCart(id: number | undefined) {
    if (id != undefined) {
      this.productsService.addToCart(id);
    }
  }

  removeFromCart(id: number | undefined) {
    if (id != undefined) {
      this.productsService.removeFromCart(id);
    }
  }

  inShoppingCart(id: number | undefined): boolean {
    if (id != undefined) {
      return this.productsService.getShoppingCart().includes(id);
    } else {
      return false;
    }
  }
}
