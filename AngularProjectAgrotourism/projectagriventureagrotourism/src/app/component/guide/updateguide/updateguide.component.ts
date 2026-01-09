import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuideService } from '../../../services/servicesofguide/guide.service';
import { Guide } from '../../../model/guide';


@Component({
  selector: 'app-updateguide',
  templateUrl: './updateguide.component.html',
  styleUrl: './updateguide.component.css'
})

export class UpdateguideComponent implements OnInit {

    guideForm: FormGroup;
    guideId!: number;
    showSuccessMessage: boolean = false;
  
    constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private guideService: GuideService,
      private router: Router
    ) {
      this.guideForm = this.fb.group({
        guideId: ['', Validators.required],
        guideName: ['', Validators.required],
        guideMoNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        guideEmail: ['', [Validators.required, Validators.email]]
      });
    }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.guideId = +params.get('id')!;
        this.loadGuideData(this.guideId);
      });
    }
  
    loadGuideData(id: number): void {
      this.guideService.getGuideById(id).subscribe(
        (guide: Guide) => {
          this.guideForm.patchValue(guide);
        },
        error => {
          console.log('Error fetching guide data', error);
        }
      );
    }
  
    onSubmit(): void 
    {
      if (this.guideForm.valid) 
        {
        this.guideService.updateGuide(this.guideId, this.guideForm.value).subscribe(
          () => {
            console.log('Guide updated successfully');
            this.showSuccessMessage = true;
            this.guideForm.reset(); // Clear the form fields
            setTimeout(() => {
              this.router.navigate(['/getalguide']); // Adjust the path as necessary
            }, 2500); // Redirect after 2.5 seconds
          
          },
          error => {
            console.error('Error while updating guide', error);
          }
        );
      }
    }
  
  }


