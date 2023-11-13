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
    this.products = this.productsService.getProducts();
    this.id$.subscribe(id => this.product = this.products?.find(product => product.id == id));
  }

}
