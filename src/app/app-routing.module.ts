import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes: Routes = [
  { path:'facturacion', component:CheckoutComponent },
  { path:'registro', component:RegisterComponent },
  { path:'carrito', component:ShoppingcartComponent },
  { path:'inicio', component:DashboardComponent },
  /*{ path:'post/:id', component:PostComponent },
  { path:'update/post/:id', component:FormComponent },
  { path:'newPost', component:FormComponent, canActivate: [AuthGuard] },*/
  { path:'', pathMatch:'full', redirectTo:'/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
