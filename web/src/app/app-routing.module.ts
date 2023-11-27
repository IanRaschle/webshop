import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {HomeComponent} from "./home/home.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";

export const routes: Routes = [
  {path: "products", component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: "", redirectTo: "products", pathMatch: "full"}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}