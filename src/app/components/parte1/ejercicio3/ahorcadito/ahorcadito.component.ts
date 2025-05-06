import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AhorcaditoService } from '../../../../services/ejercicio3/ahorcadito.service';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-ahorcadito',
  imports: [RouterModule, CommonModule],
  templateUrl: './ahorcadito.component.html',
  styleUrl: './ahorcadito.component.css',
})
export class AhorcaditoComponent {
  teclado: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  categoria: string = '';
  constructor(
    private ahorcaditoService: AhorcaditoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //obtengo el parametro de la ruta
      this.ahorcaditoService.iniciarJuego(params['categoria']); //inicio el juego
      this.categoria = params['categoria'];
    });
  }

  juegoTerminado: boolean = false;

  verificarLetra(letra: string) {
    if (this.juegoTerminado) return;

    const resultado = this.ahorcaditoService.verificarLetra(letra);
    if (resultado.estado === 'victoria') {
      this.juegoTerminado = true;
      const modalVictoria = new bootstrap.Modal(
        document.getElementById('modalVictoria')
      );
      modalVictoria.show();
    } else if (resultado.estado === 'derrota') {
      this.juegoTerminado = true;
      const modalDerrota = new bootstrap.Modal(
        document.getElementById('modalDerrota')
      );
      modalDerrota.show();
    }
  }

  // Getters para el template
  get palabraOculta(): string[] {
    return this.ahorcaditoService.getPalabraOculta();
  }

  get letrasAdivinadas(): string[] {
    return this.ahorcaditoService.getLetrasAdivinadas();
  }

  get letrasErradas(): string[] {
    return this.ahorcaditoService.getLetrasErradas();
  }

  get imagenUrl(): string {
    return this.ahorcaditoService.getImagenUrl();
  }

  get palabraSeleccionada(): string {
    return this.ahorcaditoService.getPalabraSeleccionada();
  }

  cerrarModal(id: string) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }
  }

  reiniciarJuego() {
    this.cerrarModal('modalVictoria');
    this.router.navigate(['/ejercicio3']);
  }
}
