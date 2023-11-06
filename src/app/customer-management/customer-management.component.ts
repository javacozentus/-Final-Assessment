import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {

  customers!: any[];
  customer: any = {};
  updatedCustomer: any = {}; // Define updatedCustomer property

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'address', 'actions'];

  constructor(private customerService: ApiserviceService) {}
  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getAllCustomers().subscribe(
      data => {
        this.customers = data;
      },
      error => {
        console.log(error);
      }
    );
  }

 

  editCustomer(id: any, updatedCustomer: any) {
    this.customerService.updateCustomer(id, updatedCustomer).subscribe(
      data => {
        this.getCustomers();
      },
      error => {
        console.log(error);
      }
    );
  }
  

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(
      data => {
        this.getCustomers();
      },
      error => {
        console.log(error);
      }
    );
  }

  viewCustomerDetails(customer: any) {
    // Add code to view customer details
    console.log(`View details for customer with ID: ${customer.id}`);
  }



}