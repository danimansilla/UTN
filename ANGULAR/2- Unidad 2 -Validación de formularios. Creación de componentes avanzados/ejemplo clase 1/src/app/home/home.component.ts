import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero_adivinar=5
  numero;
  mensaje=""
  cssGano="";
  productos=[{
    id:1,
    nombre:"prod 1"
  },
  {
    id:2,
    nombre:"prod 2"
  }]
  constructor() { }
  adivinar(){
    this.productos=[{
      id:3,
      nombre:"prod 3"
    },
    {
      id:4,
      nombre:"prod 4"
    }]

    if(this.numero==this.numero_adivinar){
      this.mensaje="Gano"
      this.cssGano="gano"
    }else if(this.numero<this.numero_adivinar){
      this.mensaje="Debes colocar un numero mayor"
      this.cssGano="perdio"
    }else{
      this.mensaje="Debes colocar un numero menor"
      this.cssGano="perdio"
    }
  }
  ngOnInit(): void {
  }

}
