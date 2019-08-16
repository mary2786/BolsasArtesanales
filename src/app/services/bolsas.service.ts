import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BolsasService {
  bolsas = [
    {
      "id":"1",
      "name":"Bolsa 1",
      "code":"BA00001",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus quis risus auctor sagittis. Donec a ultricies urna. Nunc vitae sapien porttitor, luctus ex sit amet, gravida lorem.",
      "label":"Nuevo",
      "price":"150",
      "image":"http://obaju.ondrejsvestka.cz/img/product2_2.jpg"   
    },
    {
      "id":"2",
      "name":"Bolsa 2",
      "code":"BA00002",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus quis risus auctor sagittis. Donec a ultricies urna. Nunc vitae sapien porttitor, luctus ex sit amet, gravida lorem.",
      "label":"",
      "price":"150",
      "image":"http://obaju.ondrejsvestka.cz/img/product2_2.jpg"      
    },
    {
      "id":"3",
      "name":"Bolsa 3",
      "code":"BA00003",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus quis risus auctor sagittis. Donec a ultricies urna. Nunc vitae sapien porttitor, luctus ex sit amet, gravida lorem.",
      "label":"Oferta",
      "price":"150",
      "image":"http://obaju.ondrejsvestka.cz/img/product2_2.jpg"     
    }
  ]

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient:HttpClient) {
   }


  getBolsas(){
    //return this.bolsas;
    return this.httpClient.get("http://localhost:3000/Bags");
  }

  login(data){
    let body = JSON.stringify({
      ...data
    })


    return this.httpClient.post("http://localhost:3000/Login", body, this.httpOptions)
  }

  createUser(data){
    let body = JSON.stringify({
      ...data
    })


    return this.httpClient.post("http://localhost:3000/User", body, this.httpOptions)
  }
  
  getBolsasFilter(){
    return this.bolsas = [{
      "id":"3",
      "name":"Bolsa 3",
      "code":"BA00003",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus quis risus auctor sagittis. Donec a ultricies urna. Nunc vitae sapien porttitor, luctus ex sit amet, gravida lorem.",
      "label":"Oferta",
      "price":"150",
      "image":"http://obaju.ondrejsvestka.cz/img/product2_2.jpg"     
    }];
  }
}
