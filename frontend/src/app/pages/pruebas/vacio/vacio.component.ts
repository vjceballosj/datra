import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vacio',
  standalone: true,
  imports: [CommonModule, DecimalPipe, MatCardModule, MatButtonModule],
  templateUrl: './vacio.component.html',
  styleUrls: ['./vacio.component.scss']
})
export class VacioComponent implements OnInit {

  lecturas: Record<string, number> = {};
  resultados: Record<string, number> = {};

  pruebaActiva = false;
  intervalo?: any;

  ngOnInit(): void {}

  iniciarPrueba(): void {
    this.pruebaActiva = true;
    this.simularLecturas();
    this.intervalo = setInterval(() => this.simularLecturas(), 2000);
  }

  detenerPrueba(): void {
    this.pruebaActiva = false;
    clearInterval(this.intervalo);
    this.calcularResultados();
  }

  cerrar(): void {
    window.history.back();
  }

  private simularLecturas(): void {
    this.lecturas['V L12'] = parseFloat((Math.random() * 220).toFixed(2));
    this.lecturas['V L23'] = parseFloat((Math.random() * 220).toFixed(2));
    this.lecturas['V L31'] = parseFloat((Math.random() * 220).toFixed(2));
    this.lecturas['V L1']  = parseFloat((Math.random() * 127).toFixed(2));
    this.lecturas['V L2']  = parseFloat((Math.random() * 127).toFixed(2));
    this.lecturas['V L3']  = parseFloat((Math.random() * 127).toFixed(2));
    this.lecturas['I L1']  = parseFloat((Math.random() * 5).toFixed(2));
    this.lecturas['I L2']  = parseFloat((Math.random() * 5).toFixed(2));
    this.lecturas['I L3']  = parseFloat((Math.random() * 5).toFixed(2));
    this.lecturas['FRECUENCIA'] = parseFloat((Math.random() * 5 + 59).toFixed(2));
  }

  private calcularResultados(): void {
    const iPromedio = (this.lecturas['I L1'] + this.lecturas['I L2'] + this.lecturas['I L3']) / 3;
    const vPromedio = (this.lecturas['V L1'] + this.lecturas['V L2'] + this.lecturas['V L3']) / 3;

    this.resultados = {
      'CORRIENTE VACÍO (A)': parseFloat(iPromedio.toFixed(2)),
      'PÉRDIDAS EN EL NÚCLEO (W)': parseFloat((vPromedio * iPromedio * 0.8).toFixed(2)),
      'VOLTAJE BT': parseFloat(vPromedio.toFixed(2))
    };
  }
}
