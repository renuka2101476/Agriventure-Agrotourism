import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gallery } from '../../../model/gallery';
import { GalleryService } from '../../../services/servicesofgallery/gallery.service';

@Component({
  selector: 'app-galleryuser',
  templateUrl: './galleryuser.component.html',
  styleUrl: './galleryuser.component.css'
})
export class GalleryuserComponent {

  public gallery:Observable<Gallery[]>=of([]);
  
  constructor(private service:GalleryService)
  {
      
  }

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.gallery=this.service.getAllGallery();
  }
}
