import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-reservation-management',
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.css']
})
export class ReservationManagementComponent implements OnInit {


  newReservation: any = {};
  reservations: any[] | undefined;

  constructor(private reservationService: ApiserviceService) {}

  ngOnInit() {
    this.getReservations();
  }

  getReservations() {
    this.reservationService.getAllReservations().subscribe(
      data => {
        this.reservations = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addReservation() {
    this.reservationService.addReservation(this.newReservation).subscribe(
      data => {
        this.getReservations();
        this.newReservation = {}; // Reset the form after successful addition
      },
      error => {
        console.log(error);
      }
    );
  }

  editReservation(reservation: any) {
    // Add code to handle editing of reservation details
  }

  deleteReservation(reservationId: number) {
    this.reservationService.deleteReservation(reservationId).subscribe(
      data => {
        this.getReservations();
      },
      error => {
        console.log(error);
      }
    );
  }

  viewReservationDetails(reservation: any) {
    // Add code to view reservation details
  }
}
