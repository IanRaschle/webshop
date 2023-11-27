import {Injectable} from '@angular/core';
import {Product} from "./product";

const CART_KEY = "cart";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  shoppingCart: number[] = [];

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
    this.shoppingCart = this.getCart();
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
      let numberArr = arr.filter(s => s != '').map(s => parseInt(s));
      console.log(numberArr);
      return numberArr;
    }
    return [];
  }
}
