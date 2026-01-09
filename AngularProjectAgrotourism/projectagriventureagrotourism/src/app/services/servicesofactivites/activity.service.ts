import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../../model/activity';

@Injectable({
  providedIn: 'root'
})
  export class ActivityService 
  {
  baseUrl="http://localhost:8082";
  constructor(private http:HttpClient) { }

  addActivity(activity: Activity): Observable<HttpEvent<any>> 
  {

    const formData: FormData = new FormData();
    const blob = new Blob([activity.image], { type: 'application/octet-stream' });

    formData.append('fileName', activity.activityName);
    formData.append('description', activity.activityDescription);
    formData.append('file', blob); //, activity.activityName

    return this.http.post<HttpEvent<any>>(`${this.baseUrl}/uploadActivity`, formData, {
      reportProgress: true,
      observe: 'events'
    });

  }

  
  getAllActivities():any
  {
    return this.http.get(`${this.baseUrl}/getAllActivities`);
  }

  deleteActivity(id: number): Observable<any> 
  {
    return this.http.delete<any>(`${this.baseUrl}/deleteActivity/${id}`);
  }


  //updateActivity(id: number, formData: FormData): Observable<any> 
  updateActivity(id: any, formData: any): Observable<any> 
  {
    return this.http.put(`${this.baseUrl}/updateActivity/${id}`, formData);
  }

  //getActivityById(id: number): Observable<Activity> 
  getActivityById(id: any): Observable<Activity> 
  {
    return this.http.get<Activity>(`${this.baseUrl}/getActivity/${id}`);
  }



}
