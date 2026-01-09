import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUs } from '../../model/contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  baseUrl="http://localhost:8082";

  constructor(private http:HttpClient) { }

  sendMessage(contactUs: ContactUs): Observable<any>    //User
  {
    return this.http.post(`${this.baseUrl}/addContact`, contactUs);
  }

  getAllContact():any
  {
    return this.http.get(`${this.baseUrl}/getAllContact`);
  }

  deleteContact(id: number): Observable<any> 
  {
    return this.http.delete<any>(`${this.baseUrl}/deleteContact/${id}`);
  }

  getContactById(id: number): Observable<ContactUs> 
  {
    return this.http.get<ContactUs>(`${this.baseUrl}/getContact/${id}`);
  }
}
