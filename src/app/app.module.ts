import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


import { AppComponent } from './app.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry/employee-entry.component';
import { DesignationEntryComponent } from './designation/designation-entry/designation-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes:Routes = [
  {path: 'designation', component: DesignationEntryComponent },
  {path: 'employee', component: EmployeeEntryComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeEntryComponent,
    DesignationEntryComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
