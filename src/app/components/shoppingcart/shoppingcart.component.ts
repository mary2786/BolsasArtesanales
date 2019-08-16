import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  baglist;
  total = 0;
  subtotal = 0;
  iva = 0;
  envio = 20;
  constructor( private router:Router) { }

  ngOnInit() {
    this.loadItems();
    this.getTotal();
  }

  loadItems(){
    const items = JSON.parse(localStorage.getItem('carrito'));
    if(items != null){
      this.baglist = items;
    }
  }

  getCurrentModel() { 
    return JSON.stringify(this.baglist); 
  }

  getTotal(){
    this.total = 0;
    this.subtotal = 0;
    this.iva = 0;
    this.baglist.forEach(element => {   
        this.subtotal +=(element.price * element.cantidad);
    });

    this.iva = this.subtotal *.16;
    this.total = (this.subtotal * 1.16) + 20;
  }

  verifyLogin(){
    if(localStorage.getItem('token') != null){
      this.router.navigate(['/facturacion'])
    }else{
      this.addCart();
      this.router.navigate(['/registro'])
    }
  }

  addCart(){
    const items = JSON.parse(localStorage.getItem('carrito'));
    if(items != null){
      localStorage.removeItem('carrito');
      localStorage.setItem('carrito', JSON.stringify(this.baglist));
    }    
  }

  removeCart(idx){
    const items = JSON.parse(localStorage.getItem('carrito'));
    items.splice(idx, 1);
    console.log(items);
    localStorage.setItem('carrito', JSON.stringify(items));
    
    this.baglist = JSON.parse(localStorage.getItem('carrito'));
    this.getTotal();
  }

}
