import { Injectable } from '@angular/core';
import { CarritoModel } from '../../models/ejercicio2/carrito-model';
import { Ejercicio2Service } from './ejercicio2.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
lista: Array<CarritoModel> = [];

  constructor(private ejercicio2Service: Ejercicio2Service) { }//constructor vacio

  getLista(): Array<CarritoModel> {
    return this.lista;
  }

  agregarAlCarrito(id: string): void {
    const producto = this.ejercicio2Service.getProducto(id);
    if (producto) {
      const itemExistente = this.lista.find(item => item.id === id);
      if (itemExistente) {
        itemExistente.cantidad++;
        itemExistente.total = itemExistente.cantidad * itemExistente.precio;
      } else {
        const nuevoItem: CarritoModel = {
          id: producto.id,
          producto: producto.producto,
          precio: producto.precio,
          cantidad: 1,
          total: producto.precio
        };
        this.lista.push(nuevoItem);
      }
    }
  }

  getTotal(): number {
    return this.lista.reduce((total, item) => total + item.total, 0);
  }
}
