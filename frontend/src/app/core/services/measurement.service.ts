import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Lectura {
  variable: string;
  valor: number;
  unidad: string;
}

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  private apiUrl = 'http://localhost:8080/api/lecturas'; // ajusta tu endpoint

  constructor(private http: HttpClient) {}

  obtenerLecturas(): Observable<Lectura[]> {
    return this.http.get<Lectura[]>(this.apiUrl);
  }
}
