import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  splice(index: void, arg1: number) {
    throw new Error('Method not implemented.');
  }
  indexOf(row: any) {
    throw new Error('Method not implemented.');
  }
  editCustomer(id: number, customer: any) {
    throw new Error('Method not implemented.');
  }

 url = "http://localhost:8080";
constructor(private http:HttpClient,private router:Router) { }
  
  

getAllCustomers(): Observable<any> {
  return this.http.get(`${this.url}/customers`);
}

getCustomerById(customerId: number): Observable<any> {
  return this.http.get(`${this.url}/customers/${customerId}`);
}

addCustomer(customer: any): Observable<any> {
  return this.http.post(`${this.url}/customers/add`, customer);
}

updateCustomer(id:any, updatedCustomer: any) {
  return this.http.put(this.url+"/customers/"+id,updatedCustomer);
}


deleteCustomer(customerId: number): Observable<any> {
  return this.http.delete(`${this.url}/customers/${customerId}`);
}
  

    public  getCurrentUser(){
      let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      return this.http.get(this.url+"/current-user",{headers});
    }
    
    
    generateToken(logindata:any){
    
      return this.http.post(this.url+"/token",logindata);
    
    }
    public loginUser(token:any){
      localStorage.setItem("token",token);
      return true;
     }
    
     public isLogin(){
      let tokenStr=localStorage.getItem("token");
      if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
        return false;
      }else{
        return true;
      }
     }
    
    
     public isLogout(){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return true;
     }
    
     public getToken(){
      return localStorage.getItem("token");
     }
    
     public setUserDetails(user:any){
       localStorage.setItem("user",JSON.stringify(user));
     }
     
    
     public getUser(){
      let userstr= localStorage.getItem("user");
      if(userstr!=null){
         return JSON.parse(userstr);
      }
      else{
        this.isLogout();
        return null;
      }
     }
    
    
    
     public getUserrole(){
      let user = this.getUser();
      return user.authorities[0].authority;
     }
    
     canActivate() {
      if (this.getUserrole() === 'ROLE_ADMIN' || this.getUserrole() === 'ROLE_TEACHER') {
        return true;
      } else {
        this.router.navigate(['']); // Redirect to the login page or another appropriate page.
        return false;
      }
    }
    
    
  
    getAllRooms(): Observable<any> {
      return this.http.get(`${this.url}/rooms`);
    }
  
    addRoom(room: any): Observable<any> {
      return this.http.post(`${this.url}/rooms/add`, room);
    }
  
    deleteRoom(roomNumber: number): Observable<any> {
      return this.http.delete(`${this.url}/rooms/${roomNumber}`);
    }
  

    getAllReservations(): Observable<any> {
      return this.http.get(`${this.url}/reservations`);
    }
  
    addReservation(reservation: any): Observable<any> {
      return this.http.post(`${this.url}/reservations/add`, reservation);
    }
  
    deleteReservation(reservationId: number): Observable<any> {
      return this.http.delete(`${this.url}/reservations/${reservationId}`);
    }
  
}
