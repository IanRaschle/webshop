import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {HomeComponent} from "./home/home.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {LoginActivateGuard} from "./login-activate.guard";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path: "products", component: HomeComponent, canActivate: [LoginActivateGuard]},
  {path: 'product/:id', component: ProductDetailComponent, canActivate: [LoginActivateGuard]},
  {path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [LoginActivateGuard]},
  {path: 'login', component: LoginComponent},
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
