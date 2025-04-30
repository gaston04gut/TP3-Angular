import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { Ejercicio1Model } from '../../../models/ejercicio1/ejercicio1-model';
import { Ejercicio1Service } from '../../../services/ejercicio1/ejercicio1.service';

@Component({
  selector: 'app-ejercicio1',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css',
})
export class Ejercicio1Component {
  noticias!: Array<Ejercicio1Model>;
  constructor(private ejercicio1Service: Ejercicio1Service) {
    this.noticias = this.ejercicio1Service.getNoticias();
  }
}
