import { Component} from '@angular/core';
import { ActivityService } from '../../../services/servicesofactivites/activity.service';
import { Activity } from '../../../model/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addactivities',
  templateUrl: './addactivities.component.html',
  styleUrl: './addactivities.component.css'
})
export class AddactivitiesComponent {
  activity = new Activity();
  successMessage: string | null = null;
  

  constructor(private fileService: ActivityService, private router:Router) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      this.activity.image = new Uint8Array(reader.result as ArrayBuffer);
    };
  }

  onSubmit() {
    if (!this.activity.activityName || !this.activity.activityDescription || !this.activity.image) {
      alert('Please fill all the fields, because there are field is empty');
      return;
    }

    this.fileService.addActivity(this.activity).subscribe(
      event => {
        console.log('File uploaded successfully', event);
        this.successMessage = 'Data submitted successfully';
      
      },
      error => {
        console.log('File upload error', error);
      }
    );

    setTimeout(() => {
     // this.successMessage = ''; // Clear success message after 2 seconds
      this.router.navigate(['/allactivities']); // Redirect to gallery page
    }, 2000);

  }
}