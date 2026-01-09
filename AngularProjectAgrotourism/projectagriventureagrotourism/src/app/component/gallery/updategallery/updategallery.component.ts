import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gallery } from '../../../model/gallery';
import { GalleryService } from '../../../services/servicesofgallery/gallery.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updategallery',
  templateUrl: './updategallery.component.html',
  styleUrl: './updategallery.component.css'
})
export class UpdategalleryComponent implements OnInit {
  imageForm: FormGroup;
  gallery: Gallery;
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  imageId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private galleryService: GalleryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.imageForm = this.fb.group({
      image: ['', Validators.required]
    });
    this.gallery = new Gallery();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.imageId = +params['id'];
        this.loadGalleryData(this.imageId);
      }
    });
  }

  loadGalleryData(id: number): void {
    this.galleryService.getGalleryById(id).subscribe(
      (gallery: Gallery) => {
        this.gallery = gallery;
      },
      error => {
        console.log('Error fetching gallery data', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageForm.patchValue({ image: file });
      this.imageForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.imageForm.valid && this.imageId !== null) {
      const formData = new FormData();
      formData.append('image', this.imageForm.get('image')?.value);

      this.galleryService.updateFile(this.imageId, formData).subscribe(
        () => {
          this.successMessage = 'Image updated successfully.';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.successMessage = '';
            this.showSuccessMessage = false;
            this.router.navigate(['/allgallery']);
          }, 2000);
        },
        error => console.error('Error updating image', error)
      );
    }
  }
}




/*export class UpdategalleryComponent implements OnInit {
  imageForm: FormGroup;
  gallery = new Gallery();
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  imageId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private galleryService: GalleryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.imageForm = this.fb.group({
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.imageId = +params['id'];
        this.loadGalleryData(this.imageId);
      }
    });
  }

  loadGalleryData(id: number): void {
    this.galleryService.getGalleryById(id).subscribe(
      (gallery: Gallery) => {
        this.gallery = gallery;
        this.imageId = gallery.imageId; // Assign the fetched ID to the component property
      },
      error => {
        console.log('Error fetching gallery data', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        this.gallery.image = new Uint8Array(reader.result as ArrayBuffer);
        this.imageForm.patchValue({ image: file });
        this.imageForm.get('image')?.updateValueAndValidity();
      };
    }
  }

  onSubmit(): void {
    if (this.imageForm.valid && this.gallery.image && this.imageId !== null) {
      this.galleryService.updateFile(this.imageId, this.gallery).subscribe(
        () => {
          this.successMessage = 'Image updated successfully.';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.successMessage = ''; // Clear success message after 2 seconds
            this.showSuccessMessage = false;
            this.router.navigate(['/allgallery']); // Redirect to gallery page
          }, 2000);
        },
        error => { console.error('Error updating image', error); }
      );
    }
  }*/



/*implements OnInit {
  imageForm: FormGroup;
  gallery = new Gallery();
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  isUpdateMode: boolean = false;
  imageId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private galleryService: GalleryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.imageForm = this.fb.group({
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.imageId = +params['id'];
        this.isUpdateMode = true;
        this.loadGalleryData(this.imageId);
      }
    });
  }

  loadGalleryData(id: number): void {
    this.galleryService.getGalleryById(id).subscribe(
      (gallery: Gallery) => {
        this.gallery = gallery;
        // Convert existing binary data to a file object if necessary
      },
      error => {
        console.log('Error fetching gallery data', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        this.gallery.image = new Uint8Array(reader.result as ArrayBuffer);
        this.imageForm.patchValue({ image: file });
        this.imageForm.get('image')?.updateValueAndValidity();
      };
    }
  }

  onSubmit(): void {
    if (this.imageForm.valid && this.gallery.image) {
      if (this.isUpdateMode && this.imageId !== null) {
        this.galleryService.updateFile(this.imageId, this.gallery).subscribe(
          () => {
            this.successMessage = 'Image updated successfully.';
            this.showSuccessMessage = true;
            setTimeout(() => this.router.navigate(['/allgallery']), 2000);
          },
          error => console.error('Error updating image', error)
        );
      } 
      else 
      {
        this.galleryService.uploadFile(this.gallery).subscribe(
          () => {
            this.successMessage = 'Image uploaded successfully.';
            this.showSuccessMessage = true;
            setTimeout(() => this.router.navigate(['/allgallery']), 2000);
          },
          error => console.error('Error uploading image', error)
        );
      }
    }
  }*/
//}
