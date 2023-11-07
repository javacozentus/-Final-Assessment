import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerManagementComponent } from '../customer-management/customer-management.component';
import { RoomManagementComponent } from '../room-management/room-management.component';
import { ReservationManagementComponent } from '../reservation-management/reservation-management.component';

//import { CourseComponent } from '../course/course.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  // import { InputComponent } from '../input/input.component';
 
    constructor(private rout: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    title = 'course-page';
  
    @ViewChild('container1', { read: ViewContainerRef, static: true })
    container1!: ViewContainerRef;
  
    @ViewChild('container2', { read: ViewContainerRef, static: true })
    container2!: ViewContainerRef;
  
    @ViewChild('container5', { read: ViewContainerRef, static: true })
    container5!: ViewContainerRef;
  
    @ViewChild('container6', { read: ViewContainerRef, static: true })
    container6!: ViewContainerRef;
  
    @ViewChild('container7', { read: ViewContainerRef, static: true })
    container7!: ViewContainerRef;
  
    onAddTopic() {
      this.container1.clear();
  
      // this.container1.createComponent(InputComponent)
    }
  
    content = true;
  
    batch() {
      this.container2.clear();
  
      this.container5.clear();
  
      this.container6.clear();
  
      this.container7.clear();
  
      this.container2.createComponent(RoomManagementComponent);
    }
  
    oncourse() {
      this.container2.clear();
  
      this.container5.clear();
  
      this.container6.clear();
  
      this.container7.clear();
  
      this.container6.createComponent(CustomerManagementComponent);
  
      console.log('hii i am running');
    }
  
    onTeacher() {
      this.container2.clear();
  
      this.container5.clear();
  
      this.container6.clear();
  
      this.container7.clear();
  
      this.container5.createComponent(ReservationManagementComponent);
    }
  
    onStudent() {
      this.container2.clear();
  
      this.container5.clear();
  
      this.container6.clear();
  
      this.container7.clear();
  
      this.container5.createComponent(CustomerManagementComponent);
    }
  
    onProgram() {
      this.container2.clear();
  
      this.container5.clear();
  
      this.container6.clear();
  
      this.container7.clear();
  
      this.container7.createComponent(RoomManagementComponent);
    }
  }
  