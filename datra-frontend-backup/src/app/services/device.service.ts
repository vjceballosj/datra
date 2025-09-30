import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceDto } from '../models/device.dto';
import { MeasurementDto } from '../models/measurement.dto';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getDevices(): Observable<DeviceDto[]> {
    return this.http.get<DeviceDto[]>(`${this.apiUrl}/devices`);
  }

  getDeviceMeasurements(id: number): Observable<MeasurementDto[]> {
    return this.http.get<MeasurementDto[]>(`${this.apiUrl}/devices/${id}/measurements`);
  }

  getLastMeasurement(id: number): Observable<MeasurementDto> {
    return this.http.get<MeasurementDto>(`${this.apiUrl}/devices/${id}/measurements/last`);
  }
}