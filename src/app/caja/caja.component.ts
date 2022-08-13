import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.scss']
})
export class CajaComponent implements OnInit {
// ------------ asi se declara una variable

  edad: number;

 date="";
  // if (edad===18) {

  // }
  nombre ='cley code';
  peliculas=[];
  movies=[
    '1','2','32',
  ];

  addPelicula(){
    // this.movies.push("gaaa");
    this.movies.push(this.date);

  }
  songs=[
    {
     sound : 'first history',
     top: '3'
    }

  ];
// ------------ asi se llama a la variable por el constructor

  constructor() {
this.edad=18;
  // constructor(service:PeliculasService) {
    // para iniciar nuestra nueva instancia de nuestros servicios
    // const service=new PeliculasService();
    // this.peliculas = service.getPeliculas();
   }

// ------------ main es don de ira el codigo fuente

  ngOnInit(): void {
    // this.pelicula = this.g etPelicula();
    // -- es la clase donde se pondra la continuacion
// if (this.edad>=18) {
//   alert("user correspondiente "+this.edad);
// } else {
//   alert("el user no es correspondiente "+this.edad);

// }
  }
  getProfesion(){
    return 'Front End';
  }
// getPelicula(){
//   return  [
//     {
//      sounds : 'first history',
//      tops: '3',
//     },
//     {
//       sounds : 'one history',
//       tops: '2',
//      },
//      {
//       sounds : 'two history',
//       tops: '13',
//      },
//   ]
// }

}
