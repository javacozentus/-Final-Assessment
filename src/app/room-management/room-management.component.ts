import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.css']
})
export class RoomManagementComponent implements OnInit {


  newRoom: any = {};
  rooms: any[] | undefined;

  constructor(private roomService: ApiserviceService) {}

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    this.roomService.getAllRooms().subscribe(
      data => {
        this.rooms = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addRoom() {
    this.roomService.addRoom(this.newRoom).subscribe(
      data => {
        this.getRooms();
        this.newRoom = {}; // Reset the form after successful addition
      },
      error => {
        console.log(error);
      }
    );
  }

  editRoom(room: any) {
    // Add code to handle editing of room details
  }

  deleteRoom(roomNumber: number) {
    this.roomService.deleteRoom(roomNumber).subscribe(
      data => {
        this.getRooms();
      },
      error => {
        console.log(error);
      }
    );
  }

  viewRoomDetails(room: any) {
    // Add code to view room details
  }
}


