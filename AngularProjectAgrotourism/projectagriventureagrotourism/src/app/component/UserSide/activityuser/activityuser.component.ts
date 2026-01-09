import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity } from '../../../model/activity';
import { ActivityService } from '../../../services/servicesofactivites/activity.service';

@Component({
  selector: 'app-activityuser',
  templateUrl: './activityuser.component.html',
  styleUrl: './activityuser.component.css'
})
export class ActivityuserComponent {

  constructor(private service:ActivityService){}
  
  public images: Observable<Activity[]> =of([]);

  ngOnInit(): void {
   
    this.getAllActivity();
  }
  
 getAllActivity()
 {
    this.images=this.service.getAllActivities();
   
 }
}
