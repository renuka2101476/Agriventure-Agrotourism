import { Component } from '@angular/core';
import { FeedbackReview } from '../../../model/feedbackreview';
import { Router } from '@angular/router';
import { FeedbackreviewService } from '../../../services/servicesof_feedbackreview/feedbackreview.service';

@Component({
  selector: 'app-feedbackuser',
  templateUrl: './feedbackuser.component.html',
  styleUrl: './feedbackuser.component.css'
})
export class FeedbackuserComponent {

  feedback: FeedbackReview = new FeedbackReview(); // Initialize an instance of Feedback class
  submitted: boolean = false; // Flag to track form submission

  constructor(private feedbackService: FeedbackreviewService, private router: Router) { }

  setRating(rating: number) {
    this.feedback.rating = rating;
  }

  onSubmit() {
    this.feedbackService.submitFeedback(this.feedback).subscribe(
      () => {
        console.log('Feedback submitted successfully');
        // Optionally, reset the form
        this.feedback = new FeedbackReview();

        // Set submitted flag to true to display the success message
        this.submitted = true;

        // Hide the success message and navigate to home after 5 seconds
        setTimeout(() => {
          this.submitted = false;
          this.router.navigate(["/"]);
        }, 5000);
      },
      error => {
        console.error('Error submitting feedback:', error);
      }
    );
  }

}
