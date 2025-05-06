import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Ejercicio1P2Service } from '../../../services/parte2/ejercicio1-p2.service';
import { HeaderComponent } from '../../layout/header/header.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1-p2',
  imports: [
    HeaderComponent,
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './ejercicio1-p2.component.html',
  styleUrl: './ejercicio1-p2.component.css',
})
export class Ejercicio1P2Component implements OnInit, AfterViewInit {
  boletoForm: FormGroup; //formulario reactivo
  precioCalculado: number | null = null; //precio final del boleto
  boletos: any[] = []; //array de boletos
  //columnas de la tabla
  displayedColumns: string[] = [
    'dni',
    'email',
    'categoriaTurista',
    'fechaCompra',
    'precio',
    'precioFinal',
    'acciones',
  ];

  dataSource: MatTableDataSource<any>; //datos de la tabla. maneja los datos de la tabla

  @ViewChild(MatPaginator) paginator!: MatPaginator; //paginador de la tabla
  @ViewChild(MatSort) sort!: MatSort; //ordenamiento de la tabla

  resumenVentas = {
    menores: 0,
    adultos: 0,
    jubilados: 0,
    total: 0,
  };

  //constructor(private ejercicio1P2Service: Ejercicio1P2Service) {}
  constructor(
    private formBuilder: FormBuilder,
    private ejercicio1P2Service: Ejercicio1P2Service
  ) {
    //validaciones del formulario
    this.boletoForm = this.formBuilder.group({
      dni: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      categoriaTurista: ['', [Validators.required]],
      fechaCompra: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0)]],
    });

    this.boletoForm.get('categoriaTurista')?.valueChanges.subscribe(() => {
      this.calcularPrecio();
    });

    this.boletoForm.get('precio')?.valueChanges.subscribe(() => {
      this.calcularPrecio();
    });

    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit() {
    this.actualizarTabla();
    this.actualizarResumen();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  boletoSubmit() {
    if (this.boletoForm.valid) {
      const boleto = {
        ...this.boletoForm.value,
        precioFinal: this.precioCalculado,
      };
      this.ejercicio1P2Service.registrarBoleto(boleto);
      this.boletoForm.reset();
      this.precioCalculado = null;
      this.actualizarTabla();
      this.actualizarResumen();
    }
  }

  actualizarTabla() {
    this.boletos = this.ejercicio1P2Service.obtenerBoletos();
    this.dataSource.data = this.boletos; // Actualiza la fuente de datos de la tabla
  }

  // Metodo para actualizar el resumen de ventas en tiempo real
  actualizarResumen() {
    this.resumenVentas = {
      menores: 0,
      adultos: 0,
      jubilados: 0,
      total: 0,
    };
    const boletos = this.ejercicio1P2Service.obtenerBoletos();
    boletos.forEach((boleto) => {
      switch (boleto.categoriaTurista) {
        case '1':
          this.resumenVentas.menores += boleto.precioFinal;
          break;
        case '2':
          this.resumenVentas.adultos += boleto.precioFinal;
          break;
        case '3':
          this.resumenVentas.jubilados += boleto.precioFinal;
          break;
      }
      this.resumenVentas.total += boleto.precioFinal;
    });
  }

  aplicarFiltro(event: Event) {
    //filtro de la tabla
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Método para obtener la clase CSS según el estado del campo si es valido o no
  getInputClass(controlName: string) {
    const control = this.boletoForm.controls[controlName];
    if (control.touched || control.dirty) {
      return control.invalid ? 'input-error' : 'input-success';
    }
    return '';
  }

  // Metodo para calcular el precio del boleto basado en la categoría y el precio ingresa
  calcularPrecio() {
    const categoria = this.boletoForm.get('categoriaTurista')?.value;
    const precio = this.boletoForm.get('precio')?.value;
    if (categoria && precio && precio > 0) {
      this.precioCalculado = this.ejercicio1P2Service.calcularPrecioBoleto(
        categoria,
        precio
      );
    } else {
      this.precioCalculado = null;
    }
  }

  eliminarBoleto(boleto: any) {
    if (confirm('¿Estás seguro de que deseas eliminar este boleto?')) {
      this.ejercicio1P2Service.eliminarBoleto(boleto.dni, boleto._id);
      this.actualizarTabla();
      this.actualizarResumen();
      console.table(this.boletos);
    }
  }
}
