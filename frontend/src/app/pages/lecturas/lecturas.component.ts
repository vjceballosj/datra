import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule, MatCardTitle, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MeasurementService, Lectura } from '../../core/services/measurement.service';

@Component({
  selector: 'app-lecturas',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    DecimalPipe
  ],
  templateUrl: './lecturas.component.html',
  styleUrls: ['./lecturas.component.scss']
})
export class LecturasComponent implements OnInit {
  displayedColumns: string[] = ['variable', 'valor', 'unidad'];
  dataSource: Lectura[] = [];

  constructor(private measurementService: MeasurementService) {}

  ngOnInit(): void {
    this.measurementService.obtenerLecturas().subscribe({
      next: (data: Lectura[]) => this.dataSource = data,
      error: (err: any) => console.error('Error al cargar lecturas:', err),
    });
  }

  obtenerValor(variable: string): number {
    const lectura = this.dataSource.find(v => v.variable === variable);
    return lectura ? lectura.valor : 0;
  }
}