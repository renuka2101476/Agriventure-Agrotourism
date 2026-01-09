import { Component, OnInit } from '@angular/core';
import { TourPackage } from '../../../model/tourpackage';
import { TourpackageService } from '../../../services/servicesoftourpackage/tourpackage.service';
import { Router } from '@angular/router';
import { Activity } from '../../../model/activity';

@Component({
  selector: 'app-addtourpackage',
  templateUrl: './addtourpackage.component.html',
  styleUrl: './addtourpackage.component.css'
})
/*export class AddtourpackageComponent {

    newPackage: TourPackage = {
      packageId: 0,
      packageName: '',
      packagePrice: '',
      activitiesName: [],
      packageDescription: ''
    };
  
    constructor(private packageService: TourpackageService, private router: Router) {}

    addPackage(): void {
      this.packageService.addPackage(this.newPackage).subscribe(
        () => {
          console.log('Package added successfully');
          this.router.navigate(['/alltourpackages']); // Navigate back to the package list after adding
        },
        error => {
          console.error('Error while adding package', error);
        }
      );
    }
  
    addActivity(): void {
      this.newPackage.activitiesName.push(new Activity());
    }
  
    removeActivity(index: number): void {
      this.newPackage.activitiesName.splice(index, 1);
    }


    onFileChange(event: any, activity: Activity): void {
      const file: File = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const arrayBuffer = reader.result as ArrayBuffer;
          activity.image = new Uint8Array(arrayBuffer);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  }*/


  
  /*export class AddtourpackageComponent implements OnInit {
    newPackage: TourPackage = {
      packageId: 0,
      //custName: '',
      packageName: '',
      packagePrice: '',
      activitiesName: [],
      packageDescription: ''
    };
  
    allActivities: Activity[] = [];
  
    constructor(private packageService: TourpackageService, private router: Router) { }
  
    ngOnInit(): void {
      this.packageService.getAllActivities().subscribe(
        activities => {
          this.allActivities = activities;
        },
        error => {
          console.error('Error while fetching activities', error);
        }
      );
    }
  
    addPackage(): void {
      this.packageService.addPackage(this.newPackage).subscribe(
        () => {
          console.log('Package added successfully');
          this.router.navigate(['/alltourpackages']); // Navigate back to the package list after adding
        },
        error => {
          console.error('Error while adding package', error);
        }
      );
    }
  
    addActivity(): void {
      this.newPackage.activitiesName.push(new Activity());
    }
  
    removeActivity(index: number): void {
      this.newPackage.activitiesName.splice(index, 1);
    }
  
    onFileChange(event: any, activity: Activity): void {
      const file: File = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const arrayBuffer = reader.result as ArrayBuffer;
          activity.image = new Uint8Array(arrayBuffer);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  
    selectActivity(activity: Activity, selectedActivityId: number): void {
      const selectedActivity = this.allActivities.find(act => act.activityId === selectedActivityId);
      if (selectedActivity) {
        activity.activityName = selectedActivity.activityName;
        activity.activityDescription = selectedActivity.activityDescription;
        activity.image = selectedActivity.image;
      }
    }
  }*/




  export class AddtourpackageComponent implements OnInit {
  newPackage: TourPackage = {
    packageId: 0,
    //custName: '',
    packageName: '',
    packagePrice: '',
    activitiesName: [],
    packageDescription: ''
  };
  
  showSuccessMessage = false;

  allActivities: Activity[] = [];

  constructor(private packageService: TourpackageService, private router: Router) { }

  ngOnInit(): void {
    this.packageService.getAllActivities().subscribe(
      activities => {
        this.allActivities = activities;
      },
      error => {
        console.error('Error while fetching activities', error);
      }
    );
  }

  addPackage(): void {
    this.packageService.addPackage(this.newPackage).subscribe(
      () => {
        console.log('Package added successfully');
        this.router.navigate(['/alltourpackages']); // Navigate back to the package list after adding
      },
      error => {
        console.error('Error while adding package', error);
      }
    );
  }

  addActivity(): void {
    this.newPackage.activitiesName.push(new Activity());
  }

  removeActivity(index: number): void {
    this.newPackage.activitiesName.splice(index, 1);
  }

  onFileChange(event: any, activity: Activity): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        activity.image = new Uint8Array(arrayBuffer);
      };
      reader.readAsArrayBuffer(file);
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




/*export class AddtourpackageComponent implements OnInit {
  newPackage: TourPackage = {
    packageId: 0,
    packageName: '',
    packagePrice: '',
    packageDescription: '',
    activitiesName: []
  };

  allActivities: Activity[] = [];
  showSuccessMessage: boolean = false;

  constructor(private packageService: TourpackageService, private router: Router) { }

  ngOnInit(): void {
    this.packageService.getAllActivities().subscribe(
      activities => {
        this.allActivities = activities;
      },
      error => {
        console.error('Error while fetching activities', error);
      }
    );
  }

  addPackage(): void {
    if (this.newPackage.activitiesName.length === 0) {
      alert('Please add at least one activity.');
      return;
    }

    this.packageService.addPackage(this.newPackage).subscribe(
      () => {
        console.log('Package added successfully');
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.router.navigate(['/alltourpackages']); // Navigate back to the package list after adding
        }, 2500); // Redirect after 2.5 seconds
      },
      error => {
        console.error('Error while adding package', error);
      }
    );
  }

  addActivity(): void {
    this.newPackage.activitiesName.push(new Activity());
  }

  removeActivity(index: number): void {
    this.newPackage.activitiesName.splice(index, 1);
  }

  onFileChange(event: any, activity: Activity): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        activity.image = new Uint8Array(arrayBuffer);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  //selectActivity(activity: Activity, selectedActivityId: number): void 
  // selectActivity(activity: Activity, selectedActivityId: number | null): void
  // {
  //   const selectedActivity = this.allActivities.find(act => act.activityId === selectedActivityId);
  //   if (selectedActivity) {
  //     activity.activityName = selectedActivity.activityName;
  //     activity.activityDescription = selectedActivity.activityDescription;
  //     activity.image = selectedActivity.image;
  //   }
  // }

  //selectActivity(activity: Activity, selectedActivityId: number): void 
  selectActivity(activity: Activity, selectedActivityId: number | null): void
  {
    const selectedActivity = this.allActivities.find(act => act.activityId === (selectedActivityId as number));
    if (selectedActivity) 
      {
      activity.activityName = selectedActivity.activityName;
      activity.activityDescription = selectedActivity.activityDescription;
      activity.image = selectedActivity.image;
    }
  }

}*/