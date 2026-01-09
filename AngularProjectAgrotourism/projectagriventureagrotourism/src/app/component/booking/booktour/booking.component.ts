import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../model/booking';
import { Guide } from '../../../model/guide';
import { TourPackage } from '../../../model/tourpackage';
import { LivingHome } from '../../../model/livinghome';
import { BookingService } from '../../../services/servicesofbooking/booking.service';
import { GuideService } from '../../../services/servicesofguide/guide.service';
import { TourpackageService } from '../../../services/servicesoftourpackage/tourpackage.service';
import { LivinghomeService } from '../../../services/servicesofLivingHome/livinghome.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
/*export class BookingComponent implements OnInit {

    newBooking: Booking = {
      bookingId: 0,
      custName: '',
      custMoNo: '',
      custEmail: '',
      totalMembers: '',
      bookingDate: new Date(), // Initialize with the current date,
      guide: [],
      tourPackage: [],
      liveHome: []
    };

    constructor(private bookingService: BookingService, private router: Router) { }


    allGuide: Guide[] = [];
    allPackage: TourPackage[] = [];
    allHome: LivingHome[] = [];

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    addBookTour(): void {
      this.bookingService.addBooking(this.newBooking).subscribe(
        () => {
          console.log('Booking added successfully');
          //this.router.navigate(['/alltourpackages']); // Navigate back to the package list after adding
        },
        error => {
          console.error('Error while adding Booking', error);
        }
      );
    }

    addGuide(): void {
      this.newBooking.guide.push(new Guide());
    }

    addTourPackage(): void {
      this.newBooking.tourPackage.push(new TourPackage());
    }

    addLivingHome(): void {
      this.newBooking.liveHome.push(new LivingHome());
    }


    selectGuide(guid: Guide, event: Event): void {
      const target = event.target as HTMLSelectElement;
      const selectedGuideId = Number(target.value);
      const selectedGuide = this.allGuide.find(gud => gud.guideId === selectedGuideId);
      if (selectedGuide) {
        guid.guideName = selectedGuide.guideName;
        guid.guideMoNo = selectedGuide.guideMoNo;
        guid.guideEmail = selectedGuide.guideEmail;
      }
    }

    selectPackage(tourPackage: TourPackage, event: Event): void {
      const target = event.target as HTMLSelectElement;
      const selectedPackageId = Number(target.value);
      const selectedPackage = this.allPackage.find(pack => pack.packageId === selectedPackageId);
      if (selectedPackage) {
        tourPackage.packageName = selectedPackage.packageName;
        tourPackage.packagePrice = selectedPackage.packagePrice;
        tourPackage.activitiesName = selectedPackage.activitiesName;
        tourPackage.packageDescription = selectedPackage.packageDescription;
      } 
    }

    selectHome(home: LivingHome, event: Event): void {
      const target = event.target as HTMLSelectElement;
      const selectedHomeId = Number(target.value);
      const selectedHome = this.allHome.find(hm => hm.homeId === selectedHomeId);
      if (selectedHome) {
        home.homeType = selectedHome.homeType;
        home.homeDescription = selectedHome.homeDescription;
        home.homeRent = selectedHome.homeRent;
      } 
    }
    
  }*/






 /* export class BookingComponent implements OnInit {

    newBooking: Booking = {
      bookingId: 0,
      custName: '',
      custMoNo: '',
      custEmail: '',
      totalMembers: '',
      bookingDate: new Date(),
      guide: {} as Guide,
      tourPackage: {} as TourPackage,
      liveHome: {} as LivingHome,
      bookingAmt: '',
      bookingStatus: 'Confirm'
    };
  
    allGuides: Guide[] = [];
    allTourPackages: TourPackage[] = [];
    allLivingHomes: LivingHome[] = [];
  
    constructor(
      private guideService: GuideService,
      private tourPackageService: TourpackageService,
      private livingHomeService: LivinghomeService,
      private bookingService: BookingService
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
  
    saveBooking(): void {
      this.bookingService.saveBooking(this.newBooking).subscribe(response => {
        console.log(response);
        alert('Booking Saved and Email Sent Successfully.');
      });
    }
  }*/






  /*export class BookingComponent implements OnInit {

    newBooking: Booking = new Booking();
  
    allGuides: Guide[] = [];
    allTourPackages: TourPackage[] = [];
    allLivingHomes: LivingHome[] = [];
  
    constructor(
      private guideService: GuideService,
      private tourPackageService: TourpackageService,
      private livingHomeService: LivinghomeService,
      private bookingService: BookingService
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
  
    saveBooking(): void {
      this.bookingService.saveBooking(this.newBooking).subscribe(response => {
        console.log(response);
        alert('Booking Saved and Email Sent Successfully.');
      });
    }
  }*/





  export class BookingComponent implements OnInit {

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
        alert('Booking Saved and Email Sent Successfully.');
      });
    }
  }