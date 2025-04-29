import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { Ejercicio1Component } from './components/parte1/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './components/parte1/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './components/parte1/ejercicio3/ejercicio3.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ejercicio1', component: Ejercicio1Component },
  { path: 'ejercicio2', component: Ejercicio2Component },
  { path: 'ejercicio3', component: Ejercicio3Component },
  { path: '**', redirectTo: '' }
];
