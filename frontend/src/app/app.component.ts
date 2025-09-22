import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">Angular Frontend</mat-toolbar>
  <mat-sidenav-container>
    <mat-sidenav mode="side" opened>
      <mat-nav-list>
        <a mat-list-item routerLink="/devices">Devices</a>
      </mat-nav-list>
    </mat-sidenav>
    <mat-sidenav-content>
      <router-outlet></router-outlet>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styles: [`mat-sidenav-container { height: 100vh; }`]
})
export class AppComponent { }