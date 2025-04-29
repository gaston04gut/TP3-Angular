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
      {
        id: '1',
        producto: 'Laptop HP Pavilion',
        precio: 899.99,
        descripcion: 'Laptop HP Pavilion 15.6" Full HD, Intel Core i5, 8GB RAM, 256GB SSD',
        imagen: 'assets/img/boxeo.png',
      },
      {
        id: '2',
        producto: 'Monitor Dell 27"',
        precio: 299.99,
        descripcion: 'Monitor Dell 27" Full HD, 144Hz, 1ms, FreeSync, HDMI, DisplayPort',
        imagen: 'assets/img/boxeo4.png',
      },
      {
        id: '3',
        producto: 'Teclado Mecánico',
        precio: 89.99,
        descripcion: 'Teclado Mecánico RGB, Switches Blue, Retroiluminado, USB Passthrough',
        imagen: 'assets/img/boxeo1.png',
      },
      {
        id: '4',
        producto: 'Mouse Gaming',
        precio: 49.99,
        descripcion: 'Mouse Gaming RGB, 16000 DPI, 6 Botones Programables, Peso Ajustable',
        imagen: 'assets/img/boxeo.png',
      },
      {
        id: '5',
        producto: 'Auriculares Sony',
        precio: 199.99,
        descripcion: 'Auriculares Sony WH-1000XM4, Cancelación de Ruido, 30h Batería, Bluetooth',
        imagen: 'assets/img/boxeo4.png',
      },
      {
        id: '6',
        producto: 'Tablet Samsung',
        precio: 349.99,
        descripcion: 'Tablet Samsung Galaxy Tab S7, 11", 128GB, WiFi, S Pen Incluido',
        imagen: 'assets/img/boxeo1.png',
      },
      {
        id: '7',
        producto: 'Smartwatch Apple',
        precio: 399.99,
        descripcion: 'Apple Watch Series 7, GPS, 41mm, Correa Deportiva, Resistente al Agua',
        imagen: 'assets/img/boxeo.png',
      },
      {
        id: '8',
        producto: 'Cámara Canon',
        precio: 699.99,
        descripcion: 'Cámara Canon EOS Rebel T7, 24.1MP, Full HD, WiFi, NFC',
        imagen: 'assets/img/boxeo4.png',
      },
      {
        id: '9',
        producto: 'Impresora HP',
        precio: 149.99,
        descripcion: 'Impresora HP LaserJet Pro, WiFi, Duplex, 20ppm, Tono Negro',
        imagen: 'assets/img/boxeo1.png',
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
