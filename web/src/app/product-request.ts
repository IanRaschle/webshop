import {Product} from "./product";

export interface ProductRequest {
  _embedded: Embedded;
  page: any;
  _links: any;
}

export interface Embedded {
  products: Product[]
}
