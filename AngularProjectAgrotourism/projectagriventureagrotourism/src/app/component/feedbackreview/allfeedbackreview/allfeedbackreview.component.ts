import { Component } from '@angular/core';
import { FeedbackReview } from '../../../model/feedbackreview';
import { Observable, map, of } from 'rxjs';
import { FeedbackreviewService } from '../../../services/servicesof_feedbackreview/feedbackreview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allfeedbackreview',
  templateUrl: './allfeedbackreview.component.html',
  styleUrl: './allfeedbackreview.component.css'
})
export class AllfeedbackreviewComponent {

  feedback: Observable<FeedbackReview[]> = of([]);
  filteredfeedback: Observable<FeedbackReview[]> = of([]);
  searchText: string = '';
  //highlightedGuideId: number | null = null;
  noData: boolean = false;

  constructor(private feedbackService: FeedbackreviewService, private router: Router) {}

  ngOnInit() 
  {
    this.loadFeedback();
  }

  loadFeedback() 
  {
    this.feedback = this.feedbackService.getAllFeedbackReview();
    this.filteredfeedback = this.feedback;
  }

  search() 
  {
    if (this.searchText) {
      this.filteredfeedback = this.feedback.pipe(
        map(feedback => {
          const filtered = feedback.filter(feed => 
            feed.feedbackID.toString().includes(this.searchText) || 
            feed.rating.toString().includes(this.searchText) || 
            feed.customerName.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredfeedback = this.feedback;
      this.noData = false;
    }
  }

  onInputChange() 
  {
    this.search();
  }

  deleteFeedback(feedId: number) {
    if (confirm('Are you sure you want to delete this Feedback?')) {
      this.feedbackService.deleteFeedbackReview(feedId).subscribe(
        () => {
          console.log('Feedback deleted successfully');
          this.loadFeedback(); // Reload guides after deletion
        },
        error => {
          console.error('Error while deleting FeedReview', error);
        }
      );
    }
  }

  /*navigateToUpdate(guideId: number) {
    this.router.navigate(['/update-guide', guideId]);
  }*/
}
