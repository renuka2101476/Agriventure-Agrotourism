import { Component } from '@angular/core';
import { AdminService } from '../../../services/servicesofadmin/admin.service';
import { Admin } from '../../../model/admin';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/servicesofadmin/authentication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
//export class AdminloginComponent {

  /*adminUserName: string = '';
  adminPassword: string = '';

  constructor(
    private adminService: AdminService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    this.adminService.login(this.adminUserName, this.adminPassword).subscribe(
      (response: Admin) => {
        this.authService.setAdminId(response.adminId);
        this.router.navigate(['/sidebar']);
      },
      (error) => {
        alert('Invalid username or password');
      }
    );
  }*/

  //export class AdminloginComponent {
  /*adminUserName: string = '';
  adminPassword: string = '';
  showLoginForm: boolean = true;

  constructor(
    private adminService: AdminService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    this.adminService.login(this.adminUserName, this.adminPassword).subscribe(
      (response: Admin) => {
        this.authService.setAdminId(response.adminId);
       // Hide login form and show the next form
       //this.router.navigate(['/sidebar']);
        this.showLoginForm = false; 
      },
      (error) => {
        alert('Invalid username or password');
      }
    );
  }

  toggleSidebar() {
    this.showLoginForm = !this.showLoginForm; // Toggle the visibility of the sidebar
  }

}*/

/*export class AdminloginComponent {
  adminUserName: string = '';
  adminPassword: string = '';
  showLoginForm: boolean = true;
  errorMessage: string = ''; // Add error message property

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  onSubmit() {
    this.adminService.login(this.adminUserName, this.adminPassword).subscribe(
      (response: any) => {
        if (response.success) {
          this.showLoginForm = false;
          this.router.navigate(['/sidebar']); // Assuming '/sidebar' is the route for your sidebar component
        } else {
          this.errorMessage = 'Invalid username or password'; // Show error message
        }
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'An error occurred. Please try again later.'; // Show error message
      }
    );
  }
}*/



export class AdminloginComponent {
  adminUserName: string = '';
  adminPassword: string = '';
  showLoginForm: boolean = true;
  errorMessage: string = ''; // Add error message property

  constructor(
    private adminService: AdminService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    this.adminService.login(this.adminUserName, this.adminPassword).subscribe(
      (response: any) => {
        if (response.success) {
          this.authenticationService.setAdminId(response.admin.adminId);
          this.showLoginForm = false;
          this.router.navigate(['/sidebar']); // Assuming '/sidebar' is the route for your sidebar component
        } else {
          this.errorMessage = response.message; // Show error message
        }
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'An error occurred. Please try again later.'; // Show error message
      }
    );
  }
}