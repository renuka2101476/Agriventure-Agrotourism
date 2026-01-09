import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'projectagriventureagrotourism';


  isNavbarVisible = true;
  //isNavbarVisible1 = true;
  //isNavbarVisible2 = true;
  isScrolled = false;
  

  constructor(private router: Router, private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects || event.url;
        // Check if the current route includes any of the specified paths
        this.isNavbarVisible = !url.includes('/adminlogin') && !url.includes('/sidebar')  && !url.includes('/adminprofile') && !url.includes('/tour-package') && !url.includes('/getalguide') && !url.includes('/addguide') && !url.includes('/updguide') && !url.includes('/booking') && !url.includes('/invoice') && !url.includes('/all-admins') && !url.includes('/allactivities') && !url.includes('/addactivity') && !url.includes('/updateactivity') && !url.includes('/allgallery') && !url.includes('/updategallery') && !url.includes('/allfeedbackreview') && !url.includes('/allcontact') && !url.includes('/addhome') && !url.includes('/allhome') && !url.includes('/updatehome') && !url.includes('/addpackage') && !url.includes('/allpackage') && !url.includes('/updpackage') && !url.includes('/addgallery') && !url.includes('/update-guide') ;
       // this.isNavbarVisible2 = !url.includes('/sidebar');

        if (url.includes('/galleryuser') || url.includes('/aboutus') || url.includes('/feedbackuser') || url.includes('/contactus') || url.includes('/activityuser') || url.includes('/bookinguser') || url.includes('/packageuser') || url.includes('/livinghomeuser')) {
          this.isScrolled = true; // Change navbar color
        } else {
          this.isScrolled = false; // Reset navbar color for other pages
        }
      }
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
