import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //constructor() { }

  private adminId: number | null = null;

  setAdminId(id: number): void {
    this.adminId = id;
    localStorage.setItem('adminId', id.toString());
  }

  getAdminId(): number | null {
    const id = localStorage.getItem('adminId');
    return id ? +id : null;
  }

  clearAdminId(): void {
    this.adminId = null;
    localStorage.removeItem('adminId');
  }
}
