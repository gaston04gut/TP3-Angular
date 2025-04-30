import { Injectable } from '@angular/core';
import { HomeModel } from '../models/home-model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  homes: Array<HomeModel>;
  constructor() {
    this.homes = [
      {
        titulo: 'Ejercicio 1',
        descripcion: 'Seccion Noticias',
        ruta: '/ejercicio1',
        imagen: 'assets/img/eje1.png',
      },
      {
        titulo: 'Ejercicio 2',
        descripcion: 'Seccion Productos',
        ruta: '/ejercicio2',
        imagen: 'assets/img/eje2SM.png',
      },
      {
        titulo: 'Ejercicio 3',
        descripcion: 'Seccion Ahorcadito',
        ruta: '/ejercicio3',
        imagen: 'assets/img/eje3.png',
      },
      {
        titulo: 'Ejercicio 4',
        descripcion: 'Seccion Pokedex',
        ruta: '/ejercicio4',
        imagen: 'assets/img/eje4.png',
      }
    ];
  }
  getHomes() {
    return this.homes;
  }
}
