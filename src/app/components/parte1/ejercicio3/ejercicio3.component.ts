import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { Ejercicio3Service } from '../../../services/ejercicio3/ejercicio3.service';
import { Ejercicio3Model } from '../../../models/ejercicio3/ejercicio3-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ejercicio3',
  
  imports: [HeaderComponent, CommonModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
categorias!: Array<Ejercicio3Model>;
constructor(private ejercicio3Service: Ejercicio3Service, private router: Router) {
  this.categorias = this.ejercicio3Service.getCategorias();
}
getCategorias() {
  return this.categorias;
}
juegoNuevo(categoria: string) {
 this.router.navigate(['/ahorcadito/',categoria]);
}
}
