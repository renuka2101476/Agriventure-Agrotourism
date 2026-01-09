import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivingHome } from '../../model/livinghome';

@Injectable({
  providedIn: 'root'
})
export class LivinghomeService {

  baseUrl="http://localhost:8082";

  constructor(private http:HttpClient) { }

  getAllHome(): Observable<LivingHome[]> {
    return this.http.get<LivingHome[]>(`${this.baseUrl}/getAllLivingHomes`);
  }

  /*getAllHome():any
  {
    return this.http.get(`${this.baseUrl}/getAllLivingHomes`);
  }*/

  addHomes(home:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/addHome`,home);
  }

  deleteHome(id: number): Observable<any> 
  {
    return this.http.delete<any>(`${this.baseUrl}/deleteHomes/${id}`);
  }

  // getHomeById(id: number): Observable<LivingHome> 
  // {
  //   return this.http.get<LivingHome>(`${this.baseUrl}/getHome/${id}`);
  // }

  // updateHome(id: number, home: LivingHome): Observable<any> 
  // {
  //   return this.http.put(`${this.baseUrl}/updateHomes/${id}`, home);
  // } 

  //  updateHome(id: number, home: LivingHome): Observable<any> 
  // {
  //   return this.http.put(`${this.baseUrl}/updateHomes`, home);
  // }

  getHomeById(id: number): Observable<LivingHome> 
  {
    return this.http.get<LivingHome>(`${this.baseUrl}/getHome/${id}`);
  }

  updateHome(id: number, home: LivingHome): Observable<any> 
  {
    return this.http.put(`${this.baseUrl}/updateHomes/${id}`, home);
  }
}
