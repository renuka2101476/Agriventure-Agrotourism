import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../model/activity';
import { ActivityService } from '../../../services/servicesofactivites/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateactivities',
  templateUrl: './updateactivities.component.html',
  styleUrl: './updateactivities.component.css'
})
export class UpdateactivitiesComponent implements OnInit {
  activityForm: FormGroup;
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService, // Inject your activity service
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.activityForm = this.fb.group({
      activityId: [{ value: '', disabled: true }],
      activityName: [{ value: '', disabled: true }],
      activityDescription: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    const activityId = this.route.snapshot.paramMap.get('id');
    if (activityId) {
      this.loadActivityData(activityId);
    }
  }

  loadActivityData(id: any): void {
    this.activityService.getActivityById(id).subscribe(
      (data: any) => {
        this.activityForm.patchValue({
          activityId: data.activityId,
          activityName: data.activityName,
          activityDescription: data.activityDescription
        });
      },
      error => {
        console.log('Error fetching activity data', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.activityForm.patchValue({ image: file });
      this.activityForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.activityForm.valid) {
      const formData = new FormData();
      formData.append('activityDescription', this.activityForm.get('activityDescription')?.value);
      formData.append('image', this.activityForm.get('image')?.value);

      // Update the activity details using the activity service
      this.activityService.updateActivity(this.activityForm.get('activityId')?.value, formData).subscribe(
        () => {
          this.successMessage = 'Activity updated successfully.';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.successMessage = '';
            this.showSuccessMessage = false;
            this.router.navigate(['/allactivities']);
          }, 2000);
        },
        error => {
          console.error('Error updating activity', error);
          this.errorMessage = 'Failed to update activity. Please try again later.';
          this.showErrorMessage = true;
        }
      );
    }
  }
}





/*export class UpdateactivitiesComponent implements OnInit {
 
  activityForm: FormGroup;
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService, // Inject your activity service
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.activityForm = this.fb.group({
      activityId: [{ value: '', disabled: true }],
      activityName: [{ value: '', disabled: true }],
      activityDescription: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const activityId = this.route.snapshot.paramMap.get('id');
    if (activityId) {
      this.loadActivityData(activityId);
    }
  }

  loadActivityData(id: any): void {
    this.activityService.getActivityById(id).subscribe(
      (data: any) => {
        this.activityForm.patchValue({
          activityId: data.activityId,
          activityName: data.activityName,
          activityDescription: data.activityDescription
        });
      },
      error => {
        console.log('Error fetching activity data', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.activityForm.patchValue({ image: file });
      this.activityForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.activityForm.valid) {
      const formData = new FormData();
      formData.append('activityDescription', this.activityForm.get('activityDescription')?.value);
      formData.append('image', this.activityForm.get('image')?.value);

      // Update the activity details using the activity service
      this.activityService.updateActivity(this.activityForm.get('activityId')?.value, formData).subscribe(
        () => {
          this.successMessage = 'Activity updated successfully.';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.successMessage = '';
            this.showSuccessMessage = false;
            this.router.navigate(['/allactivities']);
          }, 2000);
        },
        error => {
          console.error('Error updating activity', error);
          this.errorMessage = 'Failed to update activity. Please try again later.';
          this.showErrorMessage = true;
        }
      );
    }
  }



  /*imageForm: FormGroup;
  gallery: Activity;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  imageId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private galleryService: ActivityService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.imageForm = this.fb.group({
      image: ['', Validators.required]
    });
    this.gallery = new Activity();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.imageId = +params['id'];
        this.loadGalleryData(this.imageId);
      }
    });
  }

  loadGalleryData(id: number): void {
    this.galleryService.getActivityById(id).subscribe(
      (gallery: Activity) => {
        this.gallery = gallery;
      },
      error => {
        console.log('Error fetching gallery data', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageForm.patchValue({ image: file });
      this.imageForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.imageForm.valid && this.imageId !== null) {
      const formData = new FormData();
      formData.append('image', this.imageForm.get('image')?.value);

      this.galleryService.updateActivity(this.imageId, formData).subscribe(
        () => {
          this.successMessage = 'Image updated successfully.';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.successMessage = '';
            this.showSuccessMessage = false;
            this.router.navigate(['/allactivities']);
          }, 2000);
        },
     //   error => console.error('Error updating image', error)
        error => {
          console.error('Error updating activity', error);
          this.errorMessage = 'Failed to update activity. Please try again later.';
          this.showErrorMessage = true;
        }
      );
    }
  }*/

  /*imageForm: FormGroup;
  activity: Activity = new Activity();
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.imageForm = this.fb.group({
      activityDescription: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const activityId = this.route.snapshot.paramMap.get('id');
    if (activityId) {
      this.loadActivityData(+activityId);
    }
  }

  loadActivityData(id: number): void {
    this.activityService.getActivityById(id).subscribe(
      (data: Activity) => {
        this.activity = data;
      },
      error => {
        console.log('Error fetching activity data', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageForm.patchValue({ image: file });
      this.imageForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.imageForm.valid) {
      const formData = new FormData();
      formData.append('activityDescription', this.imageForm.get('activityDescription')?.value);
      formData.append('image', this.imageForm.get('image')?.value);

      // Update the activity details using the activity service
      this.activityService.updateActivity(this.activity.activityId, formData).subscribe(
        () => {
          this.successMessage = 'Activity updated successfully.';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.successMessage = '';
            this.showSuccessMessage = false;
            this.router.navigate(['/allactivities']);
          }, 2000);
        },
        error => {
          console.error('Error updating activity', error);
          this.errorMessage = 'Failed to update activity. Please try again later.';
          this.showErrorMessage = true;
        }
      );
    }
  }*/
//}





/*export class UpdateactivitiesComponent implements OnInit {
 
  imageForm: FormGroup;
  activity: Activity = new Activity();
  showSuccessMessage: boolean = false;
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.imageForm = this.fb.group({
      activityDescription: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const activityId = this.route.snapshot.paramMap.get('id');
    if (activityId) {
      this.loadActivityData(+activityId);
    }
  }

  loadActivityData(id: number): void {
    this.activityService.getActivityById(id).subscribe(
      (data: Activity) => {
        this.activity = data;
      },
      error => {
        console.log('Error fetching activity data', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageForm.patchValue({ image: file });
      this.imageForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.imageForm.valid) {
      const formData = new FormData();
      formData.append('activityDescription', this.imageForm.get('activityDescription')?.value);
      formData.append('image', this.imageForm.get('image')?.value);

      // Update the activity details using the activity service
      this.activityService.updateActivity(this.activity.activityId, formData).subscribe(
        () => {
          this.successMessage = 'Activity updated successfully.';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.successMessage = '';
            this.showSuccessMessage = false;
            this.router.navigate(['/allactivities']);
          }, 2000);
        },
        error => console.error('Error updating activity', error)
      );
    }
  }
}*/




/*export class UpdateactivitiesComponent implements OnInit {
 
  imageForm: FormGroup;
  activity: Activity = new Activity();
  showSuccessMessage: boolean = false;
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.imageForm = this.fb.group({
      activityDescription: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const activityId = this.route.snapshot.paramMap.get('id');
    if (activityId) {
      this.loadActivityData(+activityId);
    }
  }

  loadActivityData(id: number): void {
    this.activityService.getActivityById(id).subscribe(
      (data: Activity) => {
        this.activity = data;
      },
      error => {
        console.log('Error fetching activity data', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageForm.patchValue({ image: file });
      this.imageForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.imageForm.valid) {
      const formData = new FormData();
      formData.append('activityDescription', this.imageForm.get('activityDescription')?.value);
      formData.append('image', this.imageForm.get('image')?.value);

      this.activityService.updateActivity(this.activity.activityId, formData).subscribe(
        () => {
          this.successMessage = 'Activity updated successfully.';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.successMessage = '';
            this.showSuccessMessage = false;
            this.router.navigate(['/allactivities']);
          }, 2000);
        },
        error => console.error('Error updating activity', error)
      );
    }
  }
}*/





 // activity: Activity = new Activity();
  //showSuccessMessage = false;
 // successMessage = 'Activity updated successfully';

 /* imageForm: FormGroup;
  activity: Activity;
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  imageId: number | null = null;
///////////
  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService,
    private router: Router,
    private route: ActivatedRoute ) 
  {  /////////
    this.imageForm = this.fb.group({
      activityDescription: ['', Validators.required],
      image: ['', Validators.required]
    });
    this.activity = new Activity();
  } */


  /*constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute
  ) {}*/


  /*ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.imageId = +params['id'];
        this.loadActivityData(this.imageId);
      }   //////////
    });
  }*/

  /*ngOnInit() {
    const activityId = this.route.snapshot.paramMap.get('id');
    if (activityId) {
      this.activityService.getActivityById(+activityId).subscribe(
        (data: Activity) => {
          this.activity = data;
        },
        (error) => {
          console.error('Error fetching activity', error);
        }
      );
    }
  }*/

  /*loadActivityData(id: number): void {
    this.activityService.getActivityById(id).subscribe(
      (data: Activity) => {
        this.activity = data;
      },
      error => {
        console.log('Error fetching activity data', error);
      }
    );  /////////
  }


  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
 //////     
      this.imageForm.patchValue({ image: file });
      this.imageForm.get('description')?.updateValueAndValidity();
      this.imageForm.get('image')?.updateValueAndValidity();
    }
  }*/

 /* onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.activity.image = file;
    }
  }*/

  /*onSubmit() {
    this.activityService.updateActivity(this.activity).subscribe(
      (response) => {
        this.showSuccessMessage = true;
      },
      (error) => {
        console.error('Error updating activity', error);
      }
    );
  }*/


  /*onSubmit(): void {
    if (this.imageForm.valid && this.imageId !== null) {
      const formData = new FormData();
      formData.append('description', this.imageForm.get('activityDescription')?.value);
      formData.append('image', this.imageForm.get('image')?.value);
////////
      this.activityService.updateActivity(this.imageId, formData).subscribe(
        () => {
          this.successMessage = 'Activity updated successfully.';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.successMessage = '';
            this.showSuccessMessage = false;
            this.router.navigate(['/allactivity']);
          }, 2000);
        },
        error => console.error('Error updating image', error)
      );
    }
  }
}*/
 
 /* activity: Activity = new Activity();
  showSuccessMessage = false;
  successMessage = 'Activity updated successfully';

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const activityId = this.route.snapshot.paramMap.get('id');
    if (activityId) {
      this.activityService.getActivityById(+activityId).subscribe(
        (data: Activity) => {
          this.activity = data;
        },
        (error) => {
          console.error('Error fetching activity', error);
        }
      );
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.activity.image = new Uint8Array(e.target.result);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  onSubmit() {
    this.activityService.updateActivity(this.activity).subscribe(
      (response) => {
        this.showSuccessMessage = true;
      },
      (error) => {
        console.error('Error updating activity', error);
      }
    );
  }

}*/



/*{

  activity: Activity = new Activity();
  showSuccessMessage = false;
  successMessage = 'Activity updated successfully';

  constructor(private activityService: ActivityService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.activity.image = new Uint8Array(e.target.result);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  onSubmit() {
    this.activityService.updateActivity(this.activity).subscribe(response => {
      this.showSuccessMessage = true;
    }, error => {
      console.error('Error updating activity', error);
    });
  }
}*/
