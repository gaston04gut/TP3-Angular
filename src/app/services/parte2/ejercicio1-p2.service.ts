import { Injectable } from '@angular/core';

interface Boleto {
  _id: number;
  dni: string;
  categoriaTurista: string;
  fechaCompra: Date;
  email: string;
  precio: number;
  precioFinal: number;
  _disponible: boolean;
}
let DESCUENTO_MENOR = 0.35;
let DESCUENTO_JUBILADO = 0.5;

@Injectable({
  providedIn: 'root',
})
export class Ejercicio1P2Service {
  private contadorId: number = 0;
  boletos: Array<Boleto> = [];
  constructor() {}

  calcularPrecioBoleto(categoria: string, precio: number) {
    let precioCalculado = precio;
    switch (categoria) {
      case '1': //menor
        precioCalculado = precio - precio * DESCUENTO_MENOR;
        break;

      case '2': //adulto
        precioCalculado = precio;
        break;

      case '3': //jubilado
        precioCalculado = precio * DESCUENTO_JUBILADO;
        break;
    }
    return precioCalculado;
  }
  //crud
  registrarBoleto(boleto: Boleto) {
    this.contadorId++;
    const boletoConId = {
      ...boleto,
      _id: this.contadorId,
      _disponible: true,
    };
    this.boletos.push(boletoConId); // Ahora guardamos el boleto con id y estado
  }
  obtenerBoletos() {
    return this.boletos.filter((boleto) => boleto._disponible);
  }

  obtenerBoleto(dni: string) {
    return this.boletos.find(
      (boleto) => boleto.dni === dni && boleto._disponible
    );
  }
  eliminarBoleto(dni: string, id: number) {
    const boleto = this.boletos.find(
      (boleto) => boleto.dni === dni && boleto._id === id
    );
    if (boleto) {
      boleto._disponible = false;
      return true;
    }
    return false;
  }
}
