import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Ejercicio{
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
ejercicios: Ejercicio[]=[
  {
    ruta: '/ejercicio1',
    nombre: 'Ejercicio 1'
  },
  {
    ruta: '/ejercicio2',
    nombre: 'Ejercicio 2'
  },
  {
    ruta: '/ejercicio3',
    nombre: 'Ejercicio 3'
  },
  {
    ruta: '/ejercicio1-p2',
    nombre: 'Ejercicio 1 - Parte 2'
  }

]
}
