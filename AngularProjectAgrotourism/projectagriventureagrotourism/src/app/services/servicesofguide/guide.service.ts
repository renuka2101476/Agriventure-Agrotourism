import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guide } from '../../model/guide';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

   baseUrl="http://localhost:8082";

  constructor(private http:HttpClient) { }

  getAllGuide(): Observable<Guide[]> {
    return this.http.get<Guide[]>(`${this.baseUrl}/getAllGuides`);
  }

  /*getAllGuide():any
  {
    return this.http.get(`${this.baseUrl}/getAllGuides`);
  }*/

  addGuide(guide:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/saveGuide`,guide);
  }

  deleteGuide(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteGuides/${id}`);
  }

  getGuideById(id: number): Observable<Guide> {
    return this.http.get<Guide>(`${this.baseUrl}/getGuide/${id}`);
  }

  updateGuide(id: number, guide: Guide): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateGuides`, guide);
  }
  
}
