import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LecturasComponent } from './pages/lecturas/lecturas.component';
import { PruebasRealizarComponent } from './pages/pruebas/pruebas-realizar/pruebas-realizar.component';
import { CortoCircuitoComponent } from './pages/pruebas/corto-circuito/corto-circuito.component';
import { VacioComponent } from './pages/pruebas/vacio/vacio.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'lecturas', component: LecturasComponent },
      { path: 'pruebas', component: PruebasRealizarComponent },
      { path: 'prueba-corto', component: CortoCircuitoComponent },
      { path: 'prueba-vacio', component: VacioComponent },
    ]
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];