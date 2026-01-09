import { Component, OnInit } from '@angular/core';
import { TourPackage} from '../../../model/tourpackage';
import { Observable, map, of } from 'rxjs';
import { TourpackageService } from '../../../services/servicesoftourpackage/tourpackage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alltourpackage',
  templateUrl: './alltourpackage.component.html',
  styleUrl: './alltourpackage.component.css'
})
/*export class AlltourpackageComponent {
  //tourPackages: Observable<TourPackage[]> = of([]);
  filteredPackage: Observable<TourPackage[]> = of([]);
  searchText: string = '';
  noData: boolean = false;

  constructor(private packageService: TourpackageService, private router: Router) {}

  tourPackages: any[] = [];


  ngOnInit(): void {
    this.packageService.getAllPackages().subscribe(data => {
      if (data && data.length > 0) {
        this.tourPackages = data;
        this.noData = false;
      } else {
        this.noData = true;
      }
    }, error => {
      this.noData = true;
      console.error('Error fetching tour packages:', error);
    });
  }

  

  navigateToUpdate(packageId: number) {
    this.router.navigate(['/updatepackage', packageId]);
  }*/
  

  /*ngOnInit() {
    this.loadPackage();
  }

  loadPackage() {
    this.packages = this.packageService.getAllPackages();
    this.filteredPackage = this.packages;
  }

  search() {
    if (this.searchText) {
      this.filteredPackage = this.packages.pipe(
        map(packages => {
          const filtered = packages.filter(pack => 
            pack.packageId.toString().includes(this.searchText) || 
            pack.packageName.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredPackage = this.packages;
      this.noData = false;
    }
  }

  onInputChange() {
    this.search();
  }

  deletePackage(packageId: number) 
  {
    if (confirm('Are you sure you want to delete this Home?')) 
      {
      this.packageService.deletePackage(packageId).subscribe(
        () => {
          console.log('Package deleted successfully');
          this.loadPackage(); // Reload homes after deletion
        },
        error => {
          console.error('Error while deleting Package', error);
        }
      );
    }
  }

  navigateToUpdate(packageId: number) {
    this.router.navigate(['/updatepackage', packageId]);
  }
}*/





/*export class AlltourpackageComponent implements OnInit 
{
  tourPackages: Observable<TourPackage[]> = of([]);
  filteredPackage: Observable<TourPackage[]> = of([]);
  searchText: string = '';
  noData: boolean = false;

  constructor(private packageService: TourpackageService, private router: Router) {}

  ngOnInit(): void {
    this.loadPackage();
  }

  loadPackage(): void {
    this.tourPackages = this.packageService.getAllPackages();
    this.filteredPackage = this.tourPackages;
  }

  search(): void {
    if (this.searchText) {
      this.filteredPackage = this.tourPackages.pipe(
        map(packages => {
          const filtered = packages.filter(pack =>
            pack.packageId.toString().includes(this.searchText) ||
            pack.packageName.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredPackage = this.tourPackages;
      this.noData = false;
    }
  }

  onInputChange(): void {
    this.search();
  }

  deletePackage(packageId: number): void {
    if (confirm('Are you sure you want to delete this package?')) {
      this.packageService.deletePackage(packageId).subscribe(
        () => {
          console.log('Package deleted successfully');
          this.loadPackage(); // Reload packages after deletion
        },
        error => {
          console.error('Error while deleting package', error);
        }
      );
    }
  }

  navigateToUpdate(packageId: number): void 
  {
    this.router.navigate(['/updatepackage', packageId]);
  }
}*/



export class AlltourpackageComponent implements OnInit {
  tourPackages: Observable<TourPackage[]> = of([]);
  filteredPackage: Observable<TourPackage[]> = of([]);
  searchText: string = '';
  noData: boolean = false;

  constructor(private packageService: TourpackageService, private router: Router) {}

  ngOnInit(): void {
    this.loadPackage();
  }

  loadPackage(): void {
    this.tourPackages = this.packageService.getAllPackages();
    this.filteredPackage = this.tourPackages;
  }

  search(): void {
    if (this.searchText) {
      this.filteredPackage = this.tourPackages.pipe(
        map(packages => {
          const filtered = packages.filter(pack =>
            pack.packageId.toString().includes(this.searchText) ||
            pack.packageName.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredPackage = this.tourPackages;
      this.noData = false;
    }
  }

  onInputChange(): void {
    this.search();
  }

  deletePackage(packageId: number): void {
    if (confirm('Are you sure you want to delete this package?')) {
      this.packageService.deletePackage(packageId).subscribe(
        () => {
          console.log('Package deleted successfully');
          this.loadPackage(); // Reload packages after deletion
        },
        error => {
          console.error('Error while deleting package', error);
        }
      );
    }
  }

  navigateToUpdate(packageId: number): void {
    this.router.navigate(['/updpackage', packageId]);
  }
}