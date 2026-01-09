import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TourPackage } from '../../model/tourpackage';
import { Activity } from '../../model/activity';

@Injectable({
  providedIn: 'root'
})
export class TourpackageService {

  baseUrl="http://localhost:8082";

  constructor(private http:HttpClient) { }

  getAllPackages(): Observable<TourPackage[]> {
    return this.http.get<TourPackage[]>(`${this.baseUrl}/getAllTourPackages`);
  }

  getPackageById(Id: number): Observable<TourPackage> 
  {
    return this.http.get<TourPackage>(`${this.baseUrl}/getPackage/${Id}`);
  }

  /*getAllPackages(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getAllTourPackages`);
  }*/

  deletePackage(id: number): Observable<any> 
  {
    return this.http.delete<any>(`${this.baseUrl}/deletePackages/${id}`);
  }

  addPackage(newPackage: TourPackage): Observable<TourPackage> 
  {
    return this.http.post<TourPackage>(`${this.baseUrl}/addTourPackage`, newPackage);
  }

  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.baseUrl}/getAllActivities`);
  }

  // getAllActivities():any
  // {
  //   return this.http.get(`${this.baseUrl}/getAllActivities`); 
  // }

  // updatePackage(tourPackage: TourPackage): Observable<void> 
  // {
  //   return this.http.put<void>(`${this.baseUrl}/updatePackages`, tourPackage);
  // }

  updatePackage(packageId: number, tourPackage: TourPackage): Observable<TourPackage> {
    return this.http.put<TourPackage>(`${this.baseUrl}/updatePackage/${packageId}`, tourPackage);
  }

}
