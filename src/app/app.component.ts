import { Component,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeeApp';

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  ngAfterViewInit(){
    this.sidenav.mode='side';
  }

}
