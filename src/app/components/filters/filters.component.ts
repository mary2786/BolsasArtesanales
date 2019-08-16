import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FiltrosService } from 'src/app/services/filtros.service';
import { Router } from '@angular/router';
import { BolsasService } from 'src/app/services/bolsas.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  colores:any;
  rangoPrecios:any;
  tamanios:any;
  aFiltros = [];

  constructor(private filtrosSrv: FiltrosService, private router: Router, private bolsasSrv: BolsasService) { 
  }

  ngOnInit() {
    this.getColores();
    this.getRangoPrecios();
    this.getTamanios();
  }

  getColores(){
    return this.filtrosSrv.getColores().subscribe(data=>{
      console.log(data);
      this.colores = data;
    });
  }

  getRangoPrecios(){
    return this.filtrosSrv.getRangoPrecios().subscribe(data=>{
      console.log(data);
      this.rangoPrecios = data;
    });
  }

  getTamanios(){
    return this.filtrosSrv.getTamanios().subscribe(data=>{
      console.log(data);
      this.tamanios = data;
    });
  }

  @Output() arrayFiltros = new EventEmitter();
  @Output() tipoFiltro = new EventEmitter<number>();

  enviarFiltros(idTipo){
    this.arrayFiltros.emit(this.aFiltros);
    this.tipoFiltro.emit(idTipo);
  }
  
  onChange(id:number, idTipo: number, event) {  
    const checked = event.target.checked;  
    
    if (checked) {  
      this.aFiltros.push(id);  
    } else {  
      const index = this.aFiltros.indexOf(id);  
      this.aFiltros.splice(index, 1);  
    }  
  }  
}
