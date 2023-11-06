import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';

import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { RoomManagementComponent } from './room-management/room-management.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    CustomerManagementComponent,
    WelcomeComponent,
    RoomManagementComponent,
    ReservationManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    NgClass,
    NgFor,
    FormsModule,
    
    MatFormFieldModule,
  
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
   
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
