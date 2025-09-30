import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../../services/device.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-device-history',
  template: `<h2>Device History</h2><canvas id="historyChart"></canvas>`
})
export class DeviceHistoryComponent implements OnInit {
  constructor(private route: ActivatedRoute, private deviceService: DeviceService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deviceService.getDeviceMeasurements(id).subscribe(data => {
      const ctx = (document.getElementById('historyChart') as HTMLCanvasElement).getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.map(d => d.timestamp),
            datasets: [{
              label: 'Value',
              data: data.map(d => d.value),
              borderColor: 'blue',
              fill: false
            }]
          }
        });
      }
    });
  }
}