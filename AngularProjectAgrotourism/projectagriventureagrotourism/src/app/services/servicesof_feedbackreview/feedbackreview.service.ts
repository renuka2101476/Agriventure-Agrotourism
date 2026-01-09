import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackReview } from '../../model/feedbackreview';

@Injectable({
  providedIn: 'root'
})
export class FeedbackreviewService {

  baseUrl="http://localhost:8082";

  constructor(private http:HttpClient){ }

  /*saveFeedbackk(feedbackData: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/addFeed`, feedbackData);
  }*/

  submitFeedback(feedback: FeedbackReview): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addFeed`, feedback);
  }

  getAllFeedbackReview():any
  {
    return this.http.get(`${this.baseUrl}/getAllFeed`);
  }

  deleteFeedbackReview(id: number): Observable<any> 
  {
    return this.http.delete<any>(`${this.baseUrl}/deleteFeed/${id}`);
  }

  getFeedbackReviewById(id: number): Observable<FeedbackReview> 
  {
    return this.http.get<FeedbackReview>(`${this.baseUrl}/getFeed/${id}`);
  }
}
