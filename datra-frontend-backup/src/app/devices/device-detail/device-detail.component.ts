import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../../services/device.service';
import { MeasurementDto } from '../../models/measurement.dto';

@Component({
  selector: 'app-device-detail',
  template: `
  <h2>Device Detail</h2>
  <div *ngIf="lastMeasurement">
    <p>Variable: {{lastMeasurement.variable}}</p>
    <p>Value: {{lastMeasurement.value}}</p>
    <p>Timestamp: {{lastMeasurement.timestamp}}</p>
  </div>
  `
})
export class DeviceDetailComponent implements OnInit {
  lastMeasurement?: MeasurementDto;

  constructor(private route: ActivatedRoute, private deviceService: DeviceService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deviceService.getLastMeasurement(id).subscribe(data => this.lastMeasurement = data);
  }
}