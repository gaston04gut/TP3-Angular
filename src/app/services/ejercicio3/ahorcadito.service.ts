import { Injectable } from '@angular/core';
import { Ejercicio3Service } from './ejercicio3.service';

@Injectable({
  providedIn: 'root',
})
export class AhorcaditoService {
  private INTENTOS_MAXIMOS = 5;
  private palabraSeleccionada: string = '';
  private palabraSeleccionadaArray: string[] = [];
  private letrasAdivinadas: string[] = [];
  private letrasErradas: string[] = [];
  private palabraOculta: string[] = [];
  private imagenUrl: string = '';

  constructor(private ejercicio3Service: Ejercicio3Service) {}

  iniciarJuego(categoria: string): void {
    const palabraArray = this.obtenerPalabraParaJuego(categoria);
    this.palabraSeleccionadaArray = palabraArray ?? [];
    this.palabraSeleccionada = palabraArray?.join('') ?? '';
    this.palabraOculta = new Array(this.palabraSeleccionada.length).fill('_');
    this.letrasAdivinadas = [];
    this.letrasErradas = [];
    this.INTENTOS_MAXIMOS = 5;
    this.imagenUrl = '';
  }

  obtenerPalabraParaJuego(categoria: string): string[] | undefined {
    const resultado = this.ejercicio3Service.getCategoria(categoria);
    if (!resultado) return undefined;

    const palabraAleatoria =
      resultado.palabra[Math.floor(Math.random() * resultado.palabra.length)];
    return palabraAleatoria.split('');
  }

  verificarLetra(letra: string): {
    estado: 'victoria' | 'derrota' | 'continuar';
  } {
    if (this.palabraSeleccionadaArray.includes(letra)) {
      this.letrasAdivinadas.push(letra);

      for (let i = 0; i < this.palabraSeleccionadaArray.length; i++) {
        if (this.palabraSeleccionadaArray[i] === letra) {
          this.palabraOculta[i] = letra;
        }
      }

      if (this.palabraOculta.join('') === this.palabraSeleccionada) {
        //si la palabra oculta es igual a la palabra seleccionada retorna victoria
        return { estado: 'victoria' };
      }
    } else {
      this.letrasErradas.push(letra);
      if (this.INTENTOS_MAXIMOS >= 5) {
        this.imagenUrl = '/assets/img/ahorcadito5.png';
        this.INTENTOS_MAXIMOS--;
      } else {
        this.imagenUrl =
          '/assets/img/ahorcadito' + this.INTENTOS_MAXIMOS + '.png';
        this.INTENTOS_MAXIMOS--;
        if (this.INTENTOS_MAXIMOS < 0) {
          this.imagenUrl = '/assets/img/ahorcadito0.png';
          return { estado: 'derrota' };
        }
      }
    }
    return { estado: 'continuar' };
  }

  // Getters
  getPalabraOculta(): string[] {
    return this.palabraOculta;
  }

  getLetrasAdivinadas(): string[] {
    return this.letrasAdivinadas;
  }

  getLetrasErradas(): string[] {
    return this.letrasErradas;
  }

  getImagenUrl(): string {
    return this.imagenUrl;
  }

  getPalabraSeleccionada(): string {
    return this.palabraSeleccionada;
  }
}
