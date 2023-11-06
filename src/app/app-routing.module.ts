import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoomManagementComponent } from './room-management/room-management.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';

const routes: Routes = [
  { path: '', component:WelcomeComponent},
  { path: 'home', component:HomeComponent },
  { path: 'customer', component:CustomerManagementComponent},
  {path:'room', component:RoomManagementComponent},
  {path:'reservation', component:ReservationManagementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
