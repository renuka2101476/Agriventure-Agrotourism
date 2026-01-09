import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivinghomeService } from '../../../services/servicesofLivingHome/livinghome.service';
import { LivingHome } from '../../../model/livinghome';



@Component({
  selector: 'app-updatelivinghome',
  templateUrl: './updatelivinghome.component.html',
  styleUrl: './updatelivinghome.component.css'
})
/*export class UpdatelivinghomeComponent implements OnInit {

  homeForm: FormGroup;
  homeId!: number;
  showSuccessMessage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private homeService: LivinghomeService,
    private router: Router
  ) {
    this.homeForm = this.fb.group({
      homeId: ['', Validators.required],
      homeType: ['', Validators.required],
      homeDescription: ['', [Validators.required]],
      homeRent: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.homeId = +params.get('id')!;
      this.loadHomeData(this.homeId);
    });
  }

  loadHomeData(id: number): void {
    this.homeService.getHomeById(id).subscribe(
      (home: LivingHome) => {
        this.homeForm.patchValue(home);
      },
      error => {
        console.log('Error fetching home data', error);
      }
    );
  }

  onSubmit(): void 
  {
    if (this.homeForm.valid) 
      {
      this.homeService.updateHome(this.homeId, this.homeForm.value).subscribe(
        () => {
          console.log('Home updated successfully');
          this.showSuccessMessage = true;
          this.homeForm.reset(); // Clear the form fields
          setTimeout(() => {
            this.router.navigate(['/allhome']); // Adjust the path as necessary
          }, 2500); // Redirect after 2.5 seconds
        
        },
        error => {
          console.error('Error while updating home', error);
        }
      );
    }
  }
}*/


export class UpdatelivinghomeComponent implements OnInit {

  homeForm: FormGroup;
  homeId!: number;
  showSuccessMessage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private homeService: LivinghomeService,
    private router: Router
  ) {
    this.homeForm = this.fb.group({
      homeId: [{ value: '', disabled: true }, Validators.required],
      homeType: [{ value: '', disabled: true }, Validators.required],
      homeDescription: ['', Validators.required],
      homeRent: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.homeId = +params.get('id')!;
      this.loadHomeData(this.homeId);
    });
  }

  loadHomeData(id: number): void {
    this.homeService.getHomeById(id).subscribe(
      (home: LivingHome) => {
        this.homeForm.patchValue(home);
      },
      error => {
        console.log('Error fetching home data', error);
      }
    );
  }

  onSubmit(): void {
    if (this.homeForm.valid) {
      const updatedHome: LivingHome = {
        homeId: this.homeId,
        homeType: this.homeForm.get('homeType')?.value,
        homeDescription: this.homeForm.get('homeDescription')?.value,
        homeRent: this.homeForm.get('homeRent')?.value
      };

      this.homeService.updateHome(this.homeId, updatedHome).subscribe(
        () => {
          console.log('Home updated successfully');
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.router.navigate(['/allhome']); // Adjust the path as necessary
          }, 2500); // Redirect after 2.5 seconds
        },
        error => {
          console.error('Error while updating home', error);
        }
      );
    }
  }
}


