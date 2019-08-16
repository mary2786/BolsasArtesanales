import { Component, Input, OnInit } from '@angular/core';
import { BolsasService } from 'src/app/services/bolsas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baglist',
  templateUrl: './baglist.component.html',
  styleUrls: ['./baglist.component.css']
})
export class BaglistComponent implements OnInit {

  bolsasTotal = 0;
  bolsas;
  @Input() arrayId = [];
  @Input() idTipoF : number;

  constructor(private bolsasSrv: BolsasService, private router: Router) { 
  }

  ngOnInit() {
    this.getbolsas();
  }

  getbolsas(){
    return this.bolsasSrv.getBolsas().subscribe(data=>{
      console.log(data);
      this.bolsas = data;
      this.bolsasTotal = this.bolsas.length;
    });
  }

  ngOnChanges(changes): void {
    console.log("RECIBIDO");
    console.log(this.idTipoF);
    console.log(this.arrayId);
    if(this.arrayId.length > 0){
      this.bolsas = this.bolsasSrv.getBolsasFilter();
    }   
  }

  addCart(id){
    let list=[];
    let bag = this.bolsas.find(f => f._id == id);
    const items = JSON.parse(localStorage.getItem('carrito'));
    console.log(items);
    if(items != null){
      localStorage.removeItem('carrito');
      items.push(bag);
      localStorage.setItem('carrito', JSON.stringify(items));
    }else{
       list.push(bag);
       localStorage.setItem('carrito', JSON.stringify(list));
    }
    
    alert("Se agregó el artículo a tu carrito");
  }

  
}