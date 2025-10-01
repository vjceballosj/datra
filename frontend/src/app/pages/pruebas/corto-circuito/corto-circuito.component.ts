import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DecimalPipe } from '@angular/common';
import { MeasurementService } from '../../../core/services/measurement.service';


@Component({
  selector: 'app-prueba-corto-circuito',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, DecimalPipe],
  templateUrl: './corto-circuito.component.html',
  styleUrls: ['./corto-circuito.component.scss']
})
export class CortoCircuitoComponent implements OnInit {
  // 📊 Lecturas instantáneas
  lecturas: Record<string, number> = {
    'V L12': 0,
    'V L23': 0,
    'V L31': 0,
    'V L1': 0,
    'V L2': 0,
    'V L3': 0,
    'I L1': 0,
    'I L2': 0,
    'I L3': 0,
    'FRECUENCIA': 0
  };

  // ⚙️ Valores calculados en backend
  calculados: Record<string, number> = {
    'CORRIENTE NOMINAL': 0,
    'V.CORTO CIRCUITO': 0,
    'C.CORTO CIRCUITO (A)': 0,
    'PERDIDAS EN EL COBRE (W)': 0
  };

  constructor(private measurementService: MeasurementService) { }

  ngOnInit(): void {
    // Simulación de lecturas en tiempo real (luego reemplazamos con API)
    setInterval(() => {
      this.lecturas['V L12'] = parseFloat((Math.random() * 220).toFixed(2));
      this.lecturas['V L23'] = parseFloat((Math.random() * 220).toFixed(2));
      this.lecturas['V L31'] = parseFloat((Math.random() * 220).toFixed(2));
      this.lecturas['I L1'] = parseFloat((Math.random() * 10).toFixed(2));
      this.lecturas['I L2'] = parseFloat((Math.random() * 10).toFixed(2));
      this.lecturas['I L3'] = parseFloat((Math.random() * 10).toFixed(2));
      this.lecturas['FRECUENCIA'] = parseFloat((Math.random() * 5 + 59).toFixed(2));

    }, 1000);
  }

  iniciarPrueba() {
    console.log('✅ Prueba iniciada');
  }

  detenerPrueba() {
    console.log('🛑 Prueba detenida y datos guardados');
  }

  cerrar() {
    console.log('🔒 Prueba cerrada');
  }
}

