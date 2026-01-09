import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../../model/booking';
import { Observable } from 'rxjs';
import { Guide } from '../../model/guide';
import { TourPackage } from '../../model/tourpackage';
import { LivingHome } from '../../model/livinghome';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl="http://localhost:8082";

  constructor(private http:HttpClient) { }

  saveBooking(booking: Booking): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/addBookings`, booking);
  }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/getAllBookingg`);
  }

  /*getBookingById(Id: number): Observable<Booking> 
  {
    return this.http.get<Booking>(`${this.baseUrl}/getBooking/${Id}`);
  }

  deleteBooking(id: number): Observable<any> 
  {
    return this.http.delete<any>(`${this.baseUrl}/deleteBookingg/${id}`);
  }

  addBooking(newBooking: Booking): Observable<Booking> 
  {
    return this.http.post<Booking>(`${this.baseUrl}/addTourPackage`, newBooking);
  }

  getAllGuide(): Observable<Guide[]> 
  {
    return this.http.get<Guide[]>(`${this.baseUrl}/getAllGuides`);
  }

  getAllPackage(): Observable<TourPackage[]> 
  {
    return this.http.get<TourPackage[]>(`${this.baseUrl}/getAllPackages`);
  }

  getAllHome(): Observable<LivingHome[]> 
  {
    return this.http.get<LivingHome[]>(`${this.baseUrl}/getAllHomes`);
  }*/

}



