import { Injectable } from '@angular/core';
import { Ejercicio1Model } from '../../models/ejercicio1/ejercicio1-model';

@Injectable({
  providedIn: 'root',
})
export class Ejercicio1Service {
  noticias: Array<Ejercicio1Model>;
  constructor() {
    this.noticias = [
      {
        id: 1,
        titulo: 'Avances en Tecnología Verde',
        contenido:
          'Científicos desarrollan nueva tecnología solar que promete revolucionar la energía renovable. El nuevo panel solar es un 40% más eficiente que los actuales.',
        imagen: 'assets/img/tecnologia.png',
        fecha: '2021-01-01',
      },
      {
        id: 2,
        titulo: 'Descubrimiento Arqueológico',
        contenido:
          'Arqueólogos encuentran una ciudad antigua en el desierto que podría reescribir la historia. El hallazgo incluye templos, viviendas y artefactos de más de 3000 años.',
        imagen: 'assets/img/arqueologia.png',
        fecha: '2021-01-02',
      },
      {
        id: 3,
        titulo: 'Innovación en Medicina',
        contenido:
          'Investigadores presentan un nuevo tratamiento para enfermedades neurodegenerativas. Los primeros ensayos clínicos muestran resultados prometedores.',
        imagen: 'assets/img/medicina.png',
        fecha: '2021-01-03',
      },
      {
        id: 4,
        titulo: 'Cultura y Arte',
        contenido:
          'Museo Nacional inaugura exposición de arte contemporáneo con obras de artistas emergentes. La muestra estará disponible durante los próximos tres meses.',
        imagen: 'assets/img/arte.png',
        fecha: '2021-01-04',
      }
    ];
  }
  getNoticias() {
    return this.noticias;
  }
}
