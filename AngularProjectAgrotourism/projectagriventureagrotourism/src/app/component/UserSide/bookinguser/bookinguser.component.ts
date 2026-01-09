import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../model/booking';
import { Guide } from '../../../model/guide';
import { TourPackage } from '../../../model/tourpackage';
import { LivingHome } from '../../../model/livinghome';
import { GuideService } from '../../../services/servicesofguide/guide.service';
import { TourpackageService } from '../../../services/servicesoftourpackage/tourpackage.service';
import { LivinghomeService } from '../../../services/servicesofLivingHome/livinghome.service';
import { BookingService } from '../../../services/servicesofbooking/booking.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-bookinguser',
  templateUrl: './bookinguser.component.html',
  styleUrl: './bookinguser.component.css'
})
export class BookinguserComponent implements OnInit {

  newBooking: Booking = new Booking();
  allGuides: Guide[] = [];
  allTourPackages: TourPackage[] = [];
  allLivingHomes: LivingHome[] = [];
  paymentUrl: string = '';

  constructor(
    private guideService: GuideService,
    private tourPackageService: TourpackageService,
    private livingHomeService: LivinghomeService,
    private bookingService: BookingService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadGuides();
    this.loadTourPackages();
    this.loadLivingHomes();
  }

  loadGuides(): void {
    this.guideService.getAllGuide().subscribe(data => {
      this.allGuides = data;
    });
  }

  loadTourPackages(): void {
    this.tourPackageService.getAllPackages().subscribe(data => {
      this.allTourPackages = data;
    });
  }

  loadLivingHomes(): void {
    this.livingHomeService.getAllHome().subscribe(data => {
      this.allLivingHomes = data;
    });
  }

  calculateBookingAmt(): void {
    if (this.newBooking.tourPackage && this.newBooking.liveHome && this.newBooking.totalMembers) {
      const packagePrice = parseFloat(this.newBooking.tourPackage.packagePrice || '0');
      const homeRent = parseFloat(this.newBooking.liveHome.homeRent || '0');
      const totalMembers = parseInt(this.newBooking.totalMembers || '0', 10);
      this.newBooking.bookingAmt = ((packagePrice + homeRent) * totalMembers).toString();
    }
  }

  initiatePayment(): void {
   // this.paymentUrl = `upi://pay?pa=tejas.andhare2000@okicici&pn=Tejas Sanjay Andhare&mc=0000&tid=${new Date().getTime()}&tr=${new Date().getTime()}&tn=Tour Booking&am=${this.newBooking.bookingAmt}&cu=INR`;
    this.paymentUrl = `upi://pay?pa=tejas.andhare2000@okicici&pn=Agriventure Agrotourism&mc=0000&tid=${new Date().getTime()}&tr=${new Date().getTime()}&tn=Tour Booking&am=${this.newBooking.bookingAmt}&cu=INR`;
  }

  saveBooking(): void {
    this.bookingService.saveBooking(this.newBooking).subscribe(response => {
      console.log(response);
     // alert('Booking Saved and Email Sent Successfully.');
    });
  }

 


  downloadReceipt(): void {
    this.http.get('http://localhost:8082/latest', { responseType: 'blob' }).subscribe((response: Blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(response);
      a.href = objectUrl;
      a.download = 'receipt.rtf'; // Change the file name if needed
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
