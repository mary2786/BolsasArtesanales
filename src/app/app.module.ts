import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentsComponent } from './components/components.component';
import { BaglistComponent } from './components/baglist/baglist.component';
import { BagdetailComponent } from './components/bagdetail/bagdetail.component';
import { FiltersComponent } from './components/filters/filters.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SliderComponent } from './components/slider/slider.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
    ComponentsComponent,
    BaglistComponent,
    BagdetailComponent,
    FiltersComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    OrdersComponent,
    SliderComponent,
    ShoppingcartComponent,
    CheckoutComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
