import { Component, OnInit} from '@angular/core';
import { Gallery } from '../../../model/gallery';
import { GalleryService } from '../../../services/servicesofgallery/gallery.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-addgallery',
  templateUrl: './addgallery.component.html',
  styleUrl: './addgallery.component.css'
})
export class AddgalleryComponent implements OnInit {
  imageForm: FormGroup;
  gallery = new Gallery();
  showSuccessMessage: boolean = false;
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private galleryService: GalleryService,
    private router: Router
  ) {
    this.imageForm = this.fb.group({
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
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
      this.galleryService.uploadFile(this.gallery).subscribe(
        () => {
          this.successMessage = 'Image has been added in a Gallery.';
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.successMessage = ''; // Clear success message after 2 seconds
            this.showSuccessMessage = false;
            this.router.navigate(['/allgallery']); // Redirect to gallery page
          }, 2000);
        },
        error => console.error('Error uploading image', error)
      );
    }
  }
}
