import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  colores = [
    {
      "id":"1",
      "name":"Blanco",
      "codeHtml":"#000000",
    },
    {
      "id":"2",
      "name":"Negro",
      "codeHtml":"#FFFFFF",
    },
    {
      "id":"3",
      "name":"Rojo",
      "codeHtml":"#FF0000",
    }
  ]

  rangoPrecios = [
    {
      "id":"1",
      "name":"$100.00 a $300.00",
    },
    {
      "id":"2",
      "name":"$301.00 a $500.00",
    },
    {
      "id":"3",
      "name":"$501.00 en adelante",
    }
  ]

  tamanios = [
    {
      "id":"1",
      "name":"Chico",
    },
    {
      "id":"2",
      "name":"Mediano",
    },
    {
      "id":"3",
      "name":"Grande",
    }
  ]

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient:HttpClient) {
   }

  getColores(){
    return this.httpClient.get("http://localhost:3000/Colors");
  }

  getRangoPrecios(){
    return this.httpClient.get("http://localhost:3000/Prices");
  }

  getTamanios(){
    return this.httpClient.get("http://localhost:3000/Sizes");
  }
}

