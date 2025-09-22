import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { DeviceDto } from '../../models/device.dto';

@Component({
  selector: 'app-device-list',
  template: `
  <h2>Devices</h2>
  <table mat-table [dataSource]="devices" class="mat-elevation-z8">
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef> ID </th>
      <td mat-cell *matCellDef="let element"> {{element.id}} </td>
    </ng-container>
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef> Status </th>
      <td mat-cell *matCellDef="let element"> {{element.status}} </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
  `
})
export class DeviceListComponent implements OnInit {
  devices: DeviceDto[] = [];
  displayedColumns: string[] = ['id', 'name', 'status'];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe(data => this.devices = data);
  }
}