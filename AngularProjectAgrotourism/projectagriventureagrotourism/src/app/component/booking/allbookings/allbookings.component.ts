import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../model/booking';
import { Observable, map, of } from 'rxjs';
import { BookingService } from '../../../services/servicesofbooking/booking.service';

@Component({
  selector: 'app-allbookings',
  templateUrl: './allbookings.component.html',
  styleUrl: './allbookings.component.css'
})
export class AllbookingsComponent implements OnInit {
  bookings: Observable<Booking[]> = of([]);
  filteredBookings: Observable<Booking[]> = of([]);
  searchText: string = '';
  noData: boolean = false;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.bookings = this.bookingService.getAllBookings();
    this.filteredBookings = this.bookings;
  }

  search() {
    if (this.searchText) {
      this.filteredBookings = this.bookings.pipe(
        map(bookings => {
          const filtered = bookings.filter(booking => 
            booking.custName.toLowerCase().includes(this.searchText.toLowerCase()) || 
            booking.custEmail.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredBookings = this.bookings;
      this.noData = false;
    }
  }

  onInputChange() {
    this.search();
  }
}