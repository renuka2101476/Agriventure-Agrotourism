import { Component, OnInit } from '@angular/core';
import { LivingHome } from '../../../model/livinghome';
import { Observable, map, of } from 'rxjs';
import { LivinghomeService } from '../../../services/servicesofLivingHome/livinghome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-livinghome',
  templateUrl: './all-livinghome.component.html',
  styleUrl: './all-livinghome.component.css'
})
/*export class AllLivinghomeComponent {

  homes: Observable<LivingHome[]> = of([]);
  filteredHomes: Observable<LivingHome[]> = of([]);
  searchText: string = '';
  //highlightedGuideId: number | null = null;
  noData: boolean = false;

  constructor(private homeService: LivinghomeService, private router: Router) {}

  ngOnInit() {
    this.loadHomes();
  }

  loadHomes() {
    this.homes = this.homeService.getAllHome();
    this.filteredHomes = this.homes;
  }

  search() 
  {
    if (this.searchText) {
      this.filteredHomes = this.homes.pipe(
        map(homes => {
          const filtered = homes.filter(home => 
            home.homeId.toString().includes(this.searchText) || 
            home.homeType.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredHomes = this.homes;
      this.noData = false;
    }
  }

  onInputChange() 
  {
    this.search();
  }

  deleteHome(homeId: number) {
    if (confirm('Are you sure you want to delete this Home?')) {
      this.homeService.deleteHome(homeId).subscribe(
        () => {
          console.log('Home deleted successfully');
          this.loadHomes(); // Reload guides after deletion
        },
        error => {
          console.error('Error while deleting Home', error);
        }
      );
    }
  }

  navigateToUpdate(homeId: number) {
    this.router.navigate(['/updatehome', homeId]);
  }
}*/

/*export class AllLivinghomeComponent implements OnInit {

  homes: Observable<LivingHome[]> = of([]);
  filteredHomes: Observable<LivingHome[]> = of([]);
  searchText: string = '';
  noData: boolean = false;

  constructor(private homeService: LivinghomeService, private router: Router) {}

  ngOnInit() {
    this.loadHomes();
  }

  loadHomes() {
    this.homes = this.homeService.getAllHome();
    this.filteredHomes = this.homes;
  }

  search() {
    if (this.searchText) {
      this.filteredHomes = this.homes.pipe(
        map(homes => {
          const filtered = homes.filter(home => 
            home.homeId.toString().includes(this.searchText) || 
            home.homeType.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredHomes = this.homes;
      this.noData = false;
    }
  }

  onInputChange() {
    this.search();
  }

  deleteHome(homeId: number) {
    if (confirm('Are you sure you want to delete this Home?')) {
      this.homeService.deleteHome(homeId).subscribe(
        () => {
          console.log('Home deleted successfully');
          this.loadHomes(); // Reload homes after deletion
        },
        error => {
          console.error('Error while deleting Home', error);
        }
      );
    }
  }

  navigateToUpdate(homeId: number) {
    this.router.navigate(['/updatehome', homeId]);
  }
}*/



export class AllLivinghomeComponent implements OnInit {

  homes: Observable<LivingHome[]> = of([]);
  filteredHomes: Observable<LivingHome[]> = of([]);
  searchText: string = '';
  noData: boolean = false;

  constructor(private homeService: LivinghomeService, private router: Router) {}

  ngOnInit() {
    this.loadHomes();
  }

  loadHomes() {
    this.homes = this.homeService.getAllHome();
    this.filteredHomes = this.homes;
  }

  search() {
    if (this.searchText) {
      this.filteredHomes = this.homes.pipe(
        map(homes => {
          const filtered = homes.filter(home => 
            home.homeId.toString().includes(this.searchText) || 
            home.homeType.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredHomes = this.homes;
      this.noData = false;
    }
  }

  onInputChange() {
    this.search();
  }

  deleteHome(homeId: number) {
    if (confirm('Are you sure you want to delete this Home?')) {
      this.homeService.deleteHome(homeId).subscribe(
        () => {
          console.log('Home deleted successfully');
          this.loadHomes(); // Reload homes after deletion
        },
        error => {
          console.error('Error while deleting Home', error);
        }
      );
    }
  }

  navigateToUpdate(homeId: number) {
    this.router.navigate(['/updatehome', homeId]);
  }
}