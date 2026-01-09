import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './component/booking/booktour/booking.component';
//import { FeedbackreviewComponent } from './component/feedbackreview/feedbackreview.component';
import { TourpackageComponent } from './component/tourpackage/tourpackage.component';
//import { LivinghomeComponent } from './component/livinghome/livinghome.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
//import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AlladminComponent } from './component/admin/alladmin/alladmin.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { SaveguideComponent } from './component/guide/saveguide/saveguide.component';
import { UpdateguideComponent } from './component/guide/updateguide/updateguide.component';
import { AllGuideComponent } from './component/guide/all-guide/all-guide.component';
import { AddgalleryComponent } from './component/gallery/addgallery/addgallery.component';
import { AllgalleryComponent } from './component/gallery/allgallery/allgallery.component';
import { UpdategalleryComponent } from './component/gallery/updategallery/updategallery.component';
import { UpdateactivitiesComponent } from './component/activities/updateactivities/updateactivities.component';
import { AllactivitiesComponent } from './component/activities/allactivities/allactivities.component';
import { AddactivitiesComponent } from './component/activities/addactivities/addactivities.component';
import { AllfeedbackreviewComponent } from './component/feedbackreview/allfeedbackreview/allfeedbackreview.component';
import { AllcontactComponent } from './component/contactus/allcontact/allcontact.component';
import { AddlivinghomeComponent } from './component/livinghome/addlivinghome/addlivinghome.component';
import { AllLivinghomeComponent } from './component/livinghome/all-livinghome/all-livinghome.component';
import { UpdatelivinghomeComponent } from './component/livinghome/updatelivinghome/updatelivinghome.component';
import { AlltourpackageComponent } from './component/tourpackage/alltourpackage/alltourpackage.component';
import { AddtourpackageComponent } from './component/tourpackage/addtourpackage/addtourpackage.component';
import { UpdatetourpackageComponent } from './component/tourpackage/updatetourpackage/updatetourpackage.component';
import { AdminprofileComponent } from './component/admin/adminprofile/adminprofile.component';
import { AllbookingsComponent } from './component/booking/allbookings/allbookings.component';
import { CancelbookingsComponent } from './component/booking/cancelbookings/cancelbookings.component';
import { QRCodeModule } from 'angularx-qrcode';
//import { HomepageComponent } from './component/home/homepage/homepage.component';
import { ActivityuserComponent } from './component/UserSide/activityuser/activityuser.component';
import { GalleryuserComponent } from './component/UserSide/galleryuser/galleryuser.component';
import { FeedbackuserComponent } from './component/UserSide/feedbackuser/feedbackuser.component';
import { HomepageComponent } from './component/UserSide/homepage/homepage.component';
import { BookinguserComponent } from './component/UserSide/bookinguser/bookinguser.component';
import { TourpackageuserComponent } from './component/UserSide/tourpackageuser/tourpackageuser.component';
import { LivinghomeuserComponent } from './component/UserSide/livinghomeuser/livinghomeuser.component';

@NgModule({
  declarations: [
    AppComponent,
    //AdminComponent,
    BookingComponent,
    //FeedbackreviewComponent,
    SaveguideComponent,
    TourpackageComponent,
    //LivinghomeComponent,
    InvoiceComponent,
   // AdmindashboardComponent,
    AdminloginComponent,
    AlladminComponent,
    HeaderComponent,
    SidebarComponent,
    SaveguideComponent,
    UpdateguideComponent,
    AllGuideComponent,
    AddactivitiesComponent,
    AllactivitiesComponent,
    AddgalleryComponent,
    AllgalleryComponent,
    UpdategalleryComponent,
    UpdateactivitiesComponent,
    AllfeedbackreviewComponent,
    AllcontactComponent,
    AddlivinghomeComponent,
    AllLivinghomeComponent,
    UpdatelivinghomeComponent,
    AlltourpackageComponent,
    AddtourpackageComponent,
    UpdatetourpackageComponent,
    AdminprofileComponent,
    AllbookingsComponent,
    CancelbookingsComponent,
    HomepageComponent,
    ActivityuserComponent,
    GalleryuserComponent,
    FeedbackuserComponent,
    BookinguserComponent,
    TourpackageuserComponent,
    LivinghomeuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Add FormsModule here
    ReactiveFormsModule, // Add ReactiveFormsModule here
   // NgxQRCodeModule
   QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
