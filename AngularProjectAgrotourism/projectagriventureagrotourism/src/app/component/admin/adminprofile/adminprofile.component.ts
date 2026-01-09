import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/servicesofadmin/admin.service';
import { AuthenticationService } from '../../../services/servicesofadmin/authentication.service';
import { Admin } from '../../../model/admin';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrl: './adminprofile.component.css'
})
export class AdminprofileComponent  implements OnInit {
  admin: Admin = new Admin();

  constructor(
    private adminService: AdminService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    const adminId = this.authService.getAdminId();
    if (adminId !== null) {
      this.getAdminProfile(adminId);
    } else {
      // Handle case where adminId is not found
      alert('Admin not logged in');
    }
  }

  getAdminProfile(id: number) {
    this.adminService.getAdminProfile(id).subscribe((data: Admin) => {
      this.admin = data;
    });
  }
}
