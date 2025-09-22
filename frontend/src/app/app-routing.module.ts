import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { DeviceHistoryComponent } from './devices/device-history/device-history.component';

const routes: Routes = [
  { path: 'devices', component: DeviceListComponent },
  { path: 'devices/:id', component: DeviceDetailComponent },
  { path: 'devices/:id/history', component: DeviceHistoryComponent },
  { path: '', redirectTo: '/devices', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }