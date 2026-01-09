import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { TourPackage } from '../../../model/tourpackage';
import { TourpackageService } from '../../../services/servicesoftourpackage/tourpackage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourpackageuser',
  templateUrl: './tourpackageuser.component.html',
  styleUrl: './tourpackageuser.component.css'
})
export class TourpackageuserComponent implements OnInit {
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
