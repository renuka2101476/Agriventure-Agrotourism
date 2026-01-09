import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../services/servicesofgallery/gallery.service';
import { Observable, map, of } from 'rxjs';
import { Gallery } from '../../../model/gallery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allgallery',
  templateUrl: './allgallery.component.html',
  styleUrl: './allgallery.component.css'
})
export class AllgalleryComponent implements OnInit {
  gallery: Observable<Gallery[]> = of([]);
  filteredGallery: Observable<Gallery[]> = of([]);
  searchText: string = '';
  noData: boolean = false;

  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnInit() {
    this.loadGallery();
    this.filteredGallery = this.gallery;
  }

  loadGallery() {
    this.gallery = this.galleryService.getAllGallery();
    this.gallery.subscribe(gallery => {
      this.filteredGallery = of(gallery);
    });
  }

  search() {
    if (this.searchText) {
      this.filteredGallery = this.gallery.pipe(
        map(gallery => {
          const filtered = gallery.filter(g => g.imageId.toString().includes(this.searchText));
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredGallery = this.gallery;
      this.noData = false;
    }
  }

  onInputChange() {
    this.search();
  }

  deleteGallery(imgId: number) {
    if (confirm('Are you sure you want to delete this gallery image?')) {
      this.galleryService.deleteGallery(imgId).subscribe(
        () => {
          console.log('Gallery deleted successfully');
          this.loadGallery(); // Reload gallery after deletion
        },
        error => {
          console.error('Error while deleting gallery image', error);
        }
      );
    }
  }

  navigateToUpdate(imageId: number) {
    this.router.navigate(['/updategallery', imageId]);
  }
  
}

