import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUs } from '../../../model/contactus';
import { ContactusService } from '../../../services/servicesofcontactus/contactus.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  emailAddress: string = 'agriventuretourism2024@gmail.com';
  emailAddress1: string = 'DevelopedBy@|Tejas|Suyash|Renuka|Pradnesh';
  
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2,private router:Router,private service :ContactusService) { }

  ngOnInit(): void {
   
  }

  /*for Gallery arrangement code  */
  ngAfterViewInit(): void {
    const items = this.elementRef.nativeElement.querySelectorAll('.carousel .carousel-item');
    items.forEach((e: HTMLElement) => {
      const slide = 4;
      let next = e.nextElementSibling;
      for (let i = 0; i < slide; i++) {
        if (!next) {
          next = items[0] as HTMLElement;
        }
        const cloneChild = next.cloneNode(true) as HTMLElement;
        this.renderer.appendChild(e, cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }


  /*For Contact Us  */
  @ViewChild('contactForm') contactForm!: NgForm;
  contactUs: ContactUs = new ContactUs();
  sendMessage(): void {
    this.service.sendMessage(this.contactUs)
      .subscribe(
        response => {
          console.log('Message sent successfully:', response);
          this.contactForm.resetForm();    // Reset form
          this.contactUs = new ContactUs();
        },
        error => {
          console.error('Error sending message:', error);
        }
      );
  }
 
  getAllActivities()
  {
    this.router.navigate(['activityuser']);
  }

  getAll()
  {
    this.router.navigate(['galleryuser']);
  }
    
  Booking()
  {
    this.router.navigate(['/bookinguser']);
  }
}
