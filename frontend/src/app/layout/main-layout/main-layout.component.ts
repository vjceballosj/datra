import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-main-layout',
  imports: [MatSidenavContainer, MatSidenav, MatToolbar, MatListModule, MatIcon, MatSidenavContent, RouterOutlet, MatExpansionModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
