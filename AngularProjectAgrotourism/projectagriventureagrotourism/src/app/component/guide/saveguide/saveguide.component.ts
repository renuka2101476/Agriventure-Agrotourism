import { Component, OnInit } from '@angular/core';
import { Guide } from '../../../model/guide';
import { GuideService } from '../../../services/servicesofguide/guide.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saveguide',
  templateUrl: './saveguide.component.html',
  styleUrl: './saveguide.component.css'
})
export class SaveguideComponent {
  guide = new Guide();
  showSuccessMessage: boolean = false;
  //router: any;

  constructor(private guideService: GuideService, private router: Router) { }

  onSubmit(guideForm: NgForm) {
    if (guideForm.invalid) {
      alert('Field is empty, fill all the fields.');
      return;
    }
    this.saveGuide(guideForm);
  }

  saveGuide(guideForm: NgForm) {
    this.guideService.addGuide(this.guide).subscribe(
      response => {
        console.log('Guide added successfully', response);
        this.showSuccessMessage = true;
        this.resetForm(guideForm);
        setTimeout(() => {
          this.router.navigate(['/getalguide']);
        }, 2500); // Redirect after 2.5 seconds
      },
      error => {
        console.error('Error while adding guide', error);
      }
    );
  }

  resetForm(guideForm: NgForm) {
    guideForm.resetForm();
    this.guide = new Guide();  // Reset the guide object
  }
}