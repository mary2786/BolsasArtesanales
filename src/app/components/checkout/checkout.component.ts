import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  baglist;
  total = 0;
  subtotal = 0;
  iva = 0;
  constructor() { }

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

}
