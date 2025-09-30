import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Lectura, MeasurementService } from '../../core/services/measurement.service';
import { MatToolbar } from "@angular/material/toolbar";


@Component({
  selector: 'app-lecturas',
  standalone: true,
  imports: [MatTableModule, MatToolbar],
  templateUrl: './lecturas.component.html',
  styleUrls: ['./lecturas.component.scss']
})
export class LecturasComponent {
  displayedColumns: string[] = ['variable', 'valor', 'unidad'];
  dataSource: Lectura[] = [];

  constructor(private measurementService: MeasurementService) {}

  ngOnInit(): void {
    this.measurementService.obtenerLecturas().subscribe({
      next: (data: Lectura[]) => (this.dataSource = data),
      error: (err: any) => console.error('Error al cargar lecturas:', err),
    });
  }
}



