import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { Ejercicio1Component } from './components/parte1/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './components/parte1/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './components/parte1/ejercicio3/ejercicio3.component';
import { AhorcaditoComponent } from './components/parte1/ejercicio3/ahorcadito/ahorcadito.component';
import { Ejercicio1P2Component } from './components/parte2/ejercicio1-p2/ejercicio1-p2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ejercicio1', component: Ejercicio1Component },
  { path: 'ejercicio2', component: Ejercicio2Component },
  { path: 'ejercicio3', component: Ejercicio3Component },
  {path: 'ahorcadito/:categoria', component: AhorcaditoComponent},
  {path: 'ejercicio1-p2', component: Ejercicio1P2Component},
  { path: '**', redirectTo: '' }
];
