import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Activity } from '../../../model/activity';
import { ActivityService } from '../../../services/servicesofactivites/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allactivities',
  templateUrl: './allactivities.component.html',
  styleUrl: './allactivities.component.css'
})
export class AllactivitiesComponent implements OnInit {
  activity: Observable<Activity[]> = of([]);
  filteredActivity: Observable<Activity[]> = of([]);
  searchText: string = '';
  noData: boolean = false;

  constructor(private activityService: ActivityService, private router: Router) { }

  
  ngOnInit() {
    this.loadActivity();
    this.filteredActivity = this.activity;
  }

  loadActivity() {
    this.activity = this.activityService.getAllActivities();
    this.activity.subscribe(activity => {
      this.filteredActivity = of(activity);
    });
  }

  search() {
    if (this.searchText) {
      this.filteredActivity = this.activity.pipe(
        map(activity => {
          const filtered = activity.filter(active => 
            active.activityId.toString().includes(this.searchText) || 
            active.activityName.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredActivity = this.activity;
      this.noData = false;
    }
  }

  onInputChange() {
    this.search();
  }

  deleteActivity(activityId: number) 
  {
    if (confirm('Are you sure you want to delete this gallery image?')) {
      this.activityService.deleteActivity(activityId).subscribe(
        () => {
          console.log('Gallery deleted successfully');
          this.loadActivity(); // Reload gallery after deletion
        },
        error => {
          console.error('Error while deleting Activity', error);
        }
      );
    }
  }

  navigateToUpdate(activityId: number) {
    this.router.navigate(['/updateactivity', activityId]);
  }
  

    /*public activity:Observable<Activity[]>=of([]);
    
    constructor(private service:ActivityService)
    {
        
    }
  
    ngOnInit()
    {
      this.getAll();
    }
  
    getAll()
    {
      this.activity=this.service.getAllActivities();
    }*/


    
  
  }
  





/*export class AllactivitiesComponent implements OnInit {

  activity: Observable<Activity[]> = new Observable<Activity[]>();
  filteredActivity: Observable<Activity[]> = new Observable<Activity[]>();
  searchText: string = '';
  noData: boolean = false;

  constructor(private activityService: ActivityService, private router: Router) {}

  ngOnInit() {
    this.loadActivity();
  }

  loadActivity() {
    this.activityService.getAllActivity().subscribe(
      (data: Activity[]) => {
        this.activity = of(data); // Wrap the array in an Observable using 'of'
        this.filteredActivity = of(data); // Wrap the array in an Observable using 'of'
      },
      (error: any) => {
        console.error('Error while fetching activities', error);
      }
    );
   /* this.activityService.getAllActivity().subscribe(
      (data: Activity[]) => {
        this.activity = data;
        this.filteredActivity = data;
      },
      (error: any) => {
        console.error('Error while fetching activities', error);
      }
    );
  }*/

 /* search() {
    if (this.searchText) {
      this.filteredActivity = this.activity.pipe(
        map((activities: Activity[]) => {
          const filtered = activities.filter(activity => 
            activity.activityId.toString().includes(this.searchText) || 
            activity.activityName.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredActivity = this.activity;
      this.noData = false;
    }
  }

  onInputChange() {
    this.search();
  }

  deleteActivity(activityId: number) {
    if (confirm('Are you sure you want to delete this Activity?')) {
      this.activityService.deleteActivity(activityId).subscribe(
        () => {
          console.log('Activity deleted successfully');
          this.loadActivity(); // Reload activities after deletion
        },
        error => {
          console.error('Error while deleting Activity', error);
        }
      );
    }
  }

  navigateToUpdate(activityId: number) {
    this.router.navigate(['/update-activities', activityId]);
  }
}*/




  /*activity: Observable<Activity[]> = of([]);
  filteredActivity: Observable<Activity[]> = of([]);
  searchText: string = '';
  highlightedActivityId: number | null = null;
  noData: boolean = false;

  constructor(private activityService: ActivityService, private router: Router) {}

  ngOnInit() {
    this.loadActivity();
  }

  loadActivity() {
    this.activity = this.activityService.getAllActivity();
    this.filteredActivity = this.activity;
  }

  search() {
    if (this.searchText) {
      this.filteredActivity = this.activity.pipe(
        map(activity => {
          const filtered = activity.filter(activity => 
            activity.activityId.toString().includes(this.searchText) || 
            activity.activityName.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredActivity = this.activity;
      this.noData = false;
    }
  }

  onInputChange() {
    this.search();
  }

  deleteActivity(activityId: number) {
    if (confirm('Are you sure you want to delete this Activity?')) {
      this.activityService.deleteActivity(activityId).subscribe(
        () => {
          console.log('Activity deleted successfully');
          this.loadActivity(); // Reload guides after deletion
        },
        error => {
          console.error('Error while deleting Activity', error);
        }
      );
    }
  }

  navigateToUpdate(activityId: number) {
    this.router.navigate(['/update-activities', activityId]);
  }
}*/