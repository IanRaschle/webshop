export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  remaining: number;
  rating: number;
  pictures: URL[];
}
