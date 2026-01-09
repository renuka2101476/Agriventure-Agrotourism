import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/servicesofadmin/admin.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Admin } from '../../../model/admin';

@Component({
  selector: 'app-alladmin',
  templateUrl: './alladmin.component.html',
  styleUrl: './alladmin.component.css'
})
export class AlladminComponent implements OnInit{

  public admins:Observable<Admin[]>=of([]);

  constructor(private service: AdminService, private router:Router) {
    
  }

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.admins=this.service.getAllAdmin();
  }
}
