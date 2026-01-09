import { Component } from '@angular/core';
import { ContactUs } from '../../../model/contactus';
import { Observable, map, of } from 'rxjs';
import { ContactusService } from '../../../services/servicesofcontactus/contactus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcontact',
  templateUrl: './allcontact.component.html',
  styleUrl: './allcontact.component.css'
})
export class AllcontactComponent {

  contact: Observable<ContactUs[]> = of([]);
  filteredcontact: Observable<ContactUs[]> = of([]);
  searchText: string = '';
  //highlightedGuideId: number | null = null;
  noData: boolean = false;

  constructor(private contactservice: ContactusService, private router: Router) { }

  ngOnInit() 
  {
    this.loadContactUs();
  }

  loadContactUs() 
  {
    this.contact = this.contactservice.getAllContact();
    this.filteredcontact = this.contact;
  }

  search() 
  {
    if (this.searchText) {
      this.filteredcontact = this.contact.pipe(
        map(contact => {
          const filtered = contact.filter(con => 
            con.contactId.toString().includes(this.searchText) || 
            //con.rating.toString().includes(this.searchText) || 
            con.custName.toLowerCase().includes(this.searchText.toLowerCase())
          );
          this.noData = filtered.length === 0;
          return filtered;
        })
      );
    } else {
      this.filteredcontact = this.contact;
      this.noData = false;
    }
  }

  onInputChange() 
  {
    this.search();
  }

  deleteContactUs(contId: number) 
  {
    if (confirm('Are you sure you want to delete this Feedback?')) {
      this.contactservice.deleteContact(contId).subscribe(
        () => {
          console.log('Contact Deleted Successfully');
          this.loadContactUs(); // Reload guides after deletion
        },
        error => {
          console.error('Error while Deleting Contact Details', error);
        }
      );
    }
  }

  /*navigateToUpdate(guideId: number) {
    this.router.navigate(['/update-guide', guideId]);
  }*/
}
