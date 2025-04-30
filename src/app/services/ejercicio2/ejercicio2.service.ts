import { Injectable } from '@angular/core';
import { Ejercicio2Model } from '../../models/ejercicio2/ejercicio2-model';
import { CarritoModel } from '../../models/ejercicio2/carrito-model';

@Injectable({
  providedIn: 'root',
})
export class Ejercicio2Service {
  productos: Array<Ejercicio2Model>;
  lista: Array<CarritoModel>;

  constructor() {
    this.lista = [];
    this.productos = [
      // Laptops
      {
        id: '1',
        producto: 'Laptop HP Pavilion',
        precio: 899.99,
        descripcion: 'Laptop HP Pavilion 15.6" Full HD, Intel Core i5, 8GB RAM, 256GB SSD',
        imagen: 'assets/img/laptop.png',
      },
      {
        id: '2',
        producto: 'Laptop Dell XPS',
        precio: 1299.99,
        descripcion: 'Laptop Dell XPS 13" 4K, Intel Core i7, 16GB RAM, 512GB SSD',
        imagen: 'assets/img/laptop.png',
      },
      {
        id: '3',
        producto: 'Laptop Lenovo ThinkPad',
        precio: 1099.99,
        descripcion: 'Laptop Lenovo ThinkPad X1 Carbon, 14" QHD, Intel Core i7, 16GB RAM',
        imagen: 'assets/img/laptop.png',
      },
      // Monitores
      {
        id: '4',
        producto: 'Monitor Dell 27"',
        precio: 299.99,
        descripcion: 'Monitor Dell 27" Full HD, 144Hz, 1ms, FreeSync, HDMI, DisplayPort',
        imagen: 'assets/img/monitor.png',
      },
      {
        id: '5',
        producto: 'Monitor LG UltraGear',
        precio: 449.99,
        descripcion: 'Monitor LG UltraGear 32" QHD, 165Hz, 1ms, G-Sync Compatible',
        imagen: 'assets/img/monitor.png',
      },
      {
        id: '6',
        producto: 'Monitor Samsung Odyssey',
        precio: 549.99,
        descripcion: 'Monitor Samsung Odyssey G7 32" Curvo, 240Hz, 1ms, QLED',
        imagen: 'assets/img/monitor.png',
      },
      // Celulares
      {
        id: '7',
        producto: 'Samsung Galaxy S23',
        precio: 799.99,
        descripcion: 'Samsung Galaxy S23 Ultra, 256GB, 12GB RAM, Cámara 108MP',
        imagen: 'assets/img/celular.png',
      },
      {
        id: '8',
        producto: 'iPhone 15 Pro',
        precio: 999.99,
        descripcion: 'iPhone 15 Pro Max, 256GB, Chip A17 Pro, Cámara Triple',
        imagen: 'assets/img/celular.png',
      },
      {
        id: '9',
        producto: 'Google Pixel 8',
        precio: 699.99,
        descripcion: 'Google Pixel 8 Pro, 128GB, 8GB RAM, Cámara 50MP',
        imagen: 'assets/img/celular.png',
      }
    ];
  }

  getProductos() {
    return this.productos;
  }

  getProducto(id: string) {
    return this.productos.find((producto) => producto.id === id);
  }
}
