import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LivinghomeService } from '../../../services/servicesofLivingHome/livinghome.service';
import { LivingHome } from '../../../model/livinghome';

@Component({
  selector: 'app-livinghomeuser',
  templateUrl: './livinghomeuser.component.html',
  styleUrl: './livinghomeuser.component.css'
})
export class LivinghomeuserComponent implements OnInit  {

  homes$: Observable<LivingHome[]>= of([]);

  constructor(private livinghomeService: LivinghomeService) { }

  ngOnInit() {
      this.homes$ = this.livinghomeService.getAllHome();
  }

}
