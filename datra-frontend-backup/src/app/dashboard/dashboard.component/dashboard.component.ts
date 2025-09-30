import { Component } from '@angular/core';

export interface UserData {
  id: number;
  name: string;
  role: string;
}

const ELEMENT_DATA: UserData[] = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' },
  { id: 3, name: 'Charlie', role: 'Editor' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = ['id', 'name', 'role'];
  dataSource = ELEMENT_DATA;
}
