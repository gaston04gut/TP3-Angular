import { Injectable } from '@angular/core';
import { Ejercicio3Model } from '../../models/ejercicio3/ejercicio3-model';

@Injectable({
  providedIn: 'root',
})
export class Ejercicio3Service {
  categorias: Array<Ejercicio3Model>;
  constructor() {
    this.categorias = [
      { categoria: 'Animales',
        palabra:[ 'murcielago', 'conejo', 'ballena', 'tortuga', 'elefante', 'jirafa', 'ballena']
        },
      { categoria: 'Famosos',
        palabra:[ 'messi', 'favaloro', 'maradona', 'peron', 'spinetta']
       },
      { categoria: 'Ciudades',
        palabra:['rosario', 'santiago', 'cordoba', 'formosa', 'corrientes', 'tucuman']
       },
      { categoria: 'Frutas',
        palabra:['manzana', 'banana', 'naranja','sandia','frutilla','papaya']
       },
      { categoria: 'Paises',
        palabra:['argentina', 'colombia', 'brasil', 'uruguay', 'paraguay', 'venezuela', 'argelia']
       },
    ];
  }
  //metodo que retorna las categorias de la lista de categor
  getCategorias() {
    return this.categorias;
  }
  getCategoria(categoria: string) {
    return this.categorias.find((c) => c.categoria === categoria);
  }
}
