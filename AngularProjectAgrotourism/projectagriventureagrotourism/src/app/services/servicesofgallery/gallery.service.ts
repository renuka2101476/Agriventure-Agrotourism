import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gallery } from '../../model/gallery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  baseUrl="http://localhost:8082";
  constructor(private http:HttpClient) { }

  uploadFile(gallery: Gallery): Observable<HttpEvent<any>> 
  {
    const formData: FormData = new FormData();
    const blob = new Blob([gallery.image], { type: 'application/octet-stream' });
    formData.append('file', blob);

    return this.http.post<HttpEvent<any>>(`${this.baseUrl}/upload`, formData, 
    {
      reportProgress: true,
      observe: 'events'
    });
  }

  /*updateFile(id: number, gallery: Gallery): Observable<any> {
    const formData: FormData = new FormData();
    const blob = new Blob([gallery.image], { type: 'application/octet-stream' });
    formData.append('file', blob);

    return this.http.put(`${this.baseUrl}/updateGallery/${id}`, formData);
  }*/

  updateFile(id: number, formData: FormData): Observable<any> 
  {
    return this.http.put(`${this.baseUrl}/updateGallery/${id}`, formData);
  }

  getGalleryById(id: number): Observable<Gallery> 
  {
    return this.http.get<Gallery>(`${this.baseUrl}/getGalleryImage/${id}`);
  }

  getAllGallery():any
  {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  /*getAllGallery():any
  {
    return this.http.get('${this.baseurl}/allGallery');
  }*/

  deleteGallery(id: number): Observable<any> 
  {
    return this.http.delete<any>(`${this.baseUrl}/deletePhoto/${id}`);
  }

  

  /*getAllGalleries(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(this.baseUrl);
  }*/

  /*
  downloadFile(fileName: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/download/${fileName}`, {
      responseType: 'blob'
    });
  }*/
}
