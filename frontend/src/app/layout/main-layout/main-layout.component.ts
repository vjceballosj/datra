import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { filter } from 'rxjs';



@Component({
  selector: 'app-main-layout',
  imports: [MatSidenavContainer, MatSidenav, MatToolbar, MatListModule, MatIcon, MatSidenavContent, RouterOutlet, MatExpansionModule, RouterLink],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  toolbarTitle = 'Sistema de Pruebas para Datos y Análisis de Transformadores';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Escuchar los cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateToolbarTitle(event.urlAfterRedirects);
    });
  }

  /**
   * Actualiza el título según la ruta actual.
   */
  updateToolbarTitle(url: string): void {
    if (url.includes('/dashboard')) {
      this.toolbarTitle = 'Sistema de Pruebas para Datos y Análisis de Transformadores';
    } else if (url.includes('/lecturas')) {
      this.toolbarTitle = 'Lecturas PM130+';
    } else if (url.includes('/prueba-corto')) {
      this.toolbarTitle = 'Prueba de Corto Circuito';
    } else if (url.includes('/prueba-vacio')) {
      this.toolbarTitle = 'Prueba de Vacío';
    } else {
      this.toolbarTitle = 'Sistema de Pruebas DATRA'; // título por defecto
    }
  }
}