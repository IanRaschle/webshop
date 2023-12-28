import {Injectable} from '@angular/core';
import {Product} from "./product";
import {HttpClient} from "@angular/common/http";
import {ProductRequest} from "./product-request";
import {Observable} from "rxjs";

const CART_KEY = "cart";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  shoppingCart: number[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts().subscribe(value => this.products = value._embedded.products);
    this.shoppingCart = this.getCart();
  }

  loadProducts(): Observable<ProductRequest> {
    return this.http.get<ProductRequest>("http://localhost:8080/products");
  }

  getProducts() {
    return this.products;
  }

  getShoppingCart(): number[] {
    this.shoppingCart = this.getCart();
    return this.shoppingCart;
  }

  addToCart(productId: number) {
    this.shoppingCart.push(productId);
    this.saveCart();
  }

  removeFromCart(productId: number) {
    this.shoppingCart = this.shoppingCart.filter(id => id != productId);
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem(CART_KEY, this.shoppingCart.toString());
  }

  deleteCart() {
    localStorage.removeItem(CART_KEY);
  }

  getCart(): number[] {
    let products = localStorage.getItem(CART_KEY);
    if (products != null) {
      let arr = products.split(",");
      if (arr.length == 0) {
        return [];
      }
      return arr.filter(s => s != '').map(s => parseInt(s));
    }
    return [];
  }
}
