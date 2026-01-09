import { Component, OnInit } from '@angular/core';
import { TourPackage } from '../../../model/tourpackage';
import { Activity } from '../../../model/activity';
import { ActivatedRoute, Router } from '@angular/router';
import { TourpackageService } from '../../../services/servicesoftourpackage/tourpackage.service';
import { NgForm } from '@angular/forms';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatetourpackage',
  templateUrl: './updatetourpackage.component.html',
  styleUrl: './updatetourpackage.component.css'
})
export class UpdatetourpackageComponent implements OnInit {
  packageId: number;
  tourPackage: TourPackage | null = null;
  allActivities: Activity[] = [];
  selectedActivity: Activity | null = null;

  constructor(
    private route: ActivatedRoute,
    private packageService: TourpackageService,
    private router: Router
  ) {
    this.packageId = Number(this.route.snapshot.params['packageId']);
  }

  ngOnInit(): void {
    this.loadPackage();
    this.packageService.getAllActivities().subscribe(
      activities => {
        this.allActivities = activities;
      },
      error => {
        console.error('Error while fetching activities', error);
      }
    );
  }

  loadPackage(): void {
    this.packageService.getPackageById(this.packageId).subscribe(
      tourPackage => {
        this.tourPackage = tourPackage;
        if (!this.tourPackage.activitiesName) {
          this.tourPackage.activitiesName = [];
        }
      },
      error => {
        console.error('Error while fetching package', error);
      }
    );
  }

  updatePackage(): void {
    if (this.tourPackage) {
      this.packageService.updatePackage(this.packageId, this.tourPackage).subscribe(
        () => {
          console.log('Package updated successfully');
          this.router.navigate(['/alltourpackages']);
        },
        error => {
          console.error('Error while updating package', error);
        }
      );
    }
  }
 /* updatePackage(packageForm: NgForm): void {
    if (packageForm.valid && this.tourPackage) {
      this.packageService.updatePackage(this.packageId, this.tourPackage).subscribe(
        () => {
          console.log('Package updated successfully');
          this.router.navigate(['/alltourpackages']);
        },
        error => {
          console.error('Error while updating package', error);
        }
      );
    }
  }*/

  addActivity(): void {
    if (this.selectedActivity && this.tourPackage && this.tourPackage.activitiesName) {
      const newActivity: Activity = {
        activityId: this.selectedActivity.activityId,
        activityName: this.selectedActivity.activityName,
        activityDescription: this.selectedActivity.activityDescription,
        image: this.selectedActivity.image,
      };
      this.tourPackage.activitiesName.push(newActivity);
      this.selectedActivity = null;
    }
  }

  removeActivity(index: number): void {
    if (this.tourPackage && this.tourPackage.activitiesName) {
      this.tourPackage.activitiesName.splice(index, 1);
    }
  }

  selectActivity(activity: Activity, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedActivityId = Number(target.value);
    const selectedActivity = this.allActivities.find(act => act.activityId === selectedActivityId);
    if (selectedActivity) {
      activity.activityName = selectedActivity.activityName;
      activity.activityDescription = selectedActivity.activityDescription;
      activity.image = selectedActivity.image;
    }
  }
}



/*export class UpdatetourpackageComponent implements OnInit {
  packageId: number;
  tourPackage: TourPackage | null = null;
  allActivities: Activity[] = [];
  selectedActivity: Activity | null = null;

  constructor(
    private route: ActivatedRoute,
    private packageService: TourpackageService,
    private router: Router
  ) {
    this.packageId = Number(this.route.snapshot.params['packageId']);
  }

  ngOnInit(): void {
    this.loadPackage();
    this.packageService.getAllActivities().subscribe(
      activities => {
        this.allActivities = activities;
      },
      error => {
        console.error('Error while fetching activities', error);
      }
    );
  }

  loadPackage(): void {
    this.packageService.getPackageById(this.packageId).subscribe(
      tourPackage => {
        this.tourPackage = tourPackage;
        if (!this.tourPackage.activitiesName) {
          this.tourPackage.activitiesName = [];
        }
      },
      error => {
        console.error('Error while fetching package', error);
      }
    );
  }

  updatePackage(packageForm: NgForm): void {
    if (packageForm.valid && this.tourPackage) {
      this.packageService.updatePackage(this.packageId, this.tourPackage).subscribe(
        () => {
          console.log('Package updated successfully');
          this.router.navigate(['/alltourpackages']);
        },
        error => {
          console.error('Error while updating package', error);
        }
      );
    }
  }

  addActivity(): void {
    if (this.selectedActivity && this.tourPackage && this.tourPackage.activitiesName) {
      const newActivity: Activity = {
        activityId: this.selectedActivity.activityId,
        activityName: this.selectedActivity.activityName,
        activityDescription: this.selectedActivity.activityDescription,
        image: this.selectedActivity.image,
      };
      this.tourPackage.activitiesName.push(newActivity);
      this.selectedActivity = null;
    }
  }

  removeActivity(index: number): void {
    if (this.tourPackage && this.tourPackage.activitiesName) {
      this.tourPackage.activitiesName.splice(index, 1);
    }
  }

  selectActivity(activity: Activity, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedActivityId = Number(target.value);
    const selectedActivity = this.allActivities.find(act => act.activityId === selectedActivityId);
    if (selectedActivity) {
      activity.activityName = selectedActivity.activityName;
      activity.activityDescription = selectedActivity.activityDescription;
      activity.image = selectedActivity.image;
    }
  }
}*/