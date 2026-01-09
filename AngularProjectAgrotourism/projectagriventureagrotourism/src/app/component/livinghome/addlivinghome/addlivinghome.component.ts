import { Component } from '@angular/core';
import { LivingHome } from '../../../model/livinghome';
import { LivinghomeService } from '../../../services/servicesofLivingHome/livinghome.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addlivinghome',
  templateUrl: './addlivinghome.component.html',
  styleUrl: './addlivinghome.component.css'
})
export class AddlivinghomeComponent {

  home = new LivingHome();
  showSuccessMessage: boolean = false;
  //router: any;

  constructor(private homeService: LivinghomeService, private router: Router) { }

  onSubmit(livinghomeForm: NgForm) {
    if (livinghomeForm.invalid) {
      alert('Field is empty, fill all the fields.');
      return;
    }
    this.saveHome(livinghomeForm);
  }

  saveHome(livingHomeFor: NgForm) {
    this.homeService.addHomes(this.home).subscribe(
      response => {
        console.log('Home added successfully', response);
        this.showSuccessMessage = true;
        this.resetForm(livingHomeFor);
        setTimeout(() => {
          this.router.navigate(['/allhome']);
        }, 2500); // Redirect after 2.5 seconds
      },
      error => {
        console.error('Error while adding home', error);
      }
    );
  }

  resetForm(livingHomeForm: NgForm) {
    livingHomeForm.resetForm();
    this.home = new LivingHome();  // Reset the guide object
  }
}
