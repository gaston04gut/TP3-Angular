import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { Ejercicio2Model } from '../../../models/ejercicio2/ejercicio2-model';
import { Ejercicio2Service } from '../../../services/ejercicio2/ejercicio2.service';
import { CarritoModel } from '../../../models/ejercicio2/carrito-model';
import { CarritoService } from '../../../services/ejercicio2/carrito.service';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [RouterModule, HeaderComponent, CommonModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  productos: Array<Ejercicio2Model>;
  lista: Array<CarritoModel>;

  constructor(
    private ejercicio2Service: Ejercicio2Service,
    private carritoService: CarritoService
  ) {
    this.productos = this.ejercicio2Service.getProductos();
    this.lista = this.carritoService.getLista();
  }

  agregarAlCarrito(id: string): void {
    this.carritoService.agregarAlCarrito(id);
    this.lista = this.carritoService.getLista();
  }

  getContador(): number {
    return this.carritoService.getContador();
  }

  getTotal(): number {
    return this.carritoService.getTotal();
  }
}
