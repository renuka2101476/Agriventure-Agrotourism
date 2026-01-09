import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Guide } from '../../../model/guide';
import { GuideService } from '../../../services/servicesofguide/guide.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-guide',
  templateUrl: './all-guide.component.html',
  styleUrl: './all-guide.component.css'
})
export class AllGuideComponent implements OnInit {
  guides: Observable<Guide[]> = of([]);
  filteredGuides: Observable<Guide[]> = of([]);
  searchText: string = '';
  //highlightedGuideId: number | null = null;
  noData: boolean = false;

  constructor(private guideService: GuideService, private router: Router) {}

  ngOnInit() {
    this.loadGuides();
  }

  loadGuides() {
    this.guides = this.guideService.getAllGuide();
    this.filteredGuides = this.guides;
  }

  search() 
  {
    if (this.searchText) {
      this.filteredGuides = this.guides.pipe(
        map(guides => {
          const filtered = guides.filter(guide => 
            guide.guideId.toString().includes(this.searchText) || 
            guide.guideName.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredGuides = this.guides;
      this.noData = false;
    }
  }

  onInputChange() 
  {
    this.search();
  }

  deleteGuide(guideId: number) {
    if (confirm('Are you sure you want to delete this guide?')) {
      this.guideService.deleteGuide(guideId).subscribe(
        () => {
          console.log('Guide deleted successfully');
          this.loadGuides(); // Reload guides after deletion
        },
        error => {
          console.error('Error while deleting guide', error);
        }
      );
    }
  }

  navigateToUpdate(guideId: number) {
    this.router.navigate(['/update-guide', guideId]);
  }
}


