import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  baseUrl="http://localhost:8082";
  constructor(private http:HttpClient) { }

  getAllAdmin():any
  {
    return this.http.get(`${this.baseUrl}/getAllAdmin`);
  }

  /*login(adminUserName: string, adminPassword: string): Observable<Admin> 
  {
    return this.http.post<Admin>(`${this.baseUrl}/authenticate`, { adminUserName, adminPassword });
  }*/

  login(adminUserName: string, adminPassword: string): Observable<any> 
  {
    return this.http.post<any>(`${this.baseUrl}/authenticate`, { adminUserName, adminPassword });
  }

  getAdminProfile(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/getAdmin/${id}`);
  }



  /*getAllAdmin(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }*/

  /*addAdmin(admin:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/addAdmin`,admin);
  }*/

  
}
