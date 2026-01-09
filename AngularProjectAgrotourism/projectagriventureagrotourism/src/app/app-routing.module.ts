import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { AlladminComponent } from './component/admin/alladmin/alladmin.component';
import { TourpackageComponent } from './component/tourpackage/tourpackage.component';
//import { BookingComponent } from './component/booking/booktour/booking.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
//import { FeedbackreviewComponent } from './component/feedbackreview/feedbackreview.component';
//import { LivinghomeComponent } from './component/livinghome/livinghome.component';
import { UpdateguideComponent } from './component/guide/updateguide/updateguide.component';
import { SaveguideComponent } from './component/guide/saveguide/saveguide.component';
import { AllGuideComponent } from './component/guide/all-guide/all-guide.component';
import { AllactivitiesComponent } from './component/activities/allactivities/allactivities.component';
import { AddactivitiesComponent } from './component/activities/addactivities/addactivities.component';
import { UpdateactivitiesComponent } from './component/activities/updateactivities/updateactivities.component';
import { AllgalleryComponent } from './component/gallery/allgallery/allgallery.component';
import { AddgalleryComponent } from './component/gallery/addgallery/addgallery.component';
import { UpdategalleryComponent } from './component/gallery/updategallery/updategallery.component';
import { AllfeedbackreviewComponent } from './component/feedbackreview/allfeedbackreview/allfeedbackreview.component';
import { AllcontactComponent } from './component/contactus/allcontact/allcontact.component';
import { AddlivinghomeComponent } from './component/livinghome/addlivinghome/addlivinghome.component';
import { AllLivinghomeComponent } from './component/livinghome/all-livinghome/all-livinghome.component';
import { UpdatelivinghomeComponent } from './component/livinghome/updatelivinghome/updatelivinghome.component';
import { AddtourpackageComponent } from './component/tourpackage/addtourpackage/addtourpackage.component';
import { AlltourpackageComponent } from './component/tourpackage/alltourpackage/alltourpackage.component';
import { UpdatetourpackageComponent } from './component/tourpackage/updatetourpackage/updatetourpackage.component';
//import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AdminprofileComponent } from './component/admin/adminprofile/adminprofile.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { HomepageComponent } from './component/UserSide/homepage/homepage.component';
import { ActivityuserComponent } from './component/UserSide/activityuser/activityuser.component';
import { GalleryuserComponent } from './component/UserSide/galleryuser/galleryuser.component';
import { FeedbackuserComponent } from './component/UserSide/feedbackuser/feedbackuser.component';
import { BookinguserComponent } from './component/UserSide/bookinguser/bookinguser.component';
import { TourpackageuserComponent } from './component/UserSide/tourpackageuser/tourpackageuser.component';
import { LivinghomeuserComponent } from './component/UserSide/livinghomeuser/livinghomeuser.component';
import { AllbookingsComponent } from './component/booking/allbookings/allbookings.component';

const routes: Routes = [

  { 
    path: 'tour-package', 
    component: TourpackageComponent 
  },

  { 
    path: 'getalguide', 
    component: AllGuideComponent
  },

  { 
    path: 'addguide', 
    component: SaveguideComponent 
  },

  { 
    path: 'updguide', 
    component: UpdateguideComponent 
  },

  { 
    path: 'booking', 
    component: AllbookingsComponent 
  },

  { 
    path: 'invoice', 
    component: InvoiceComponent 
  },

  /*{ 
    path: 'feedback-review', 
    component: FeedbackreviewComponent 
  },*/

  /*{ 
    path: 'living-home', 
    component: LivinghomeComponent 
  },*/

  { 
    path: 'all-admins', 
    component: AlladminComponent 
  },

  { 
    path: 'adminlogin', 
    component: AdminloginComponent 
  },

  { 
    path: 'adminprofile', 
    component: AdminprofileComponent 
  },

  { 
    path: 'allactivities', 
    component: AllactivitiesComponent
  },

  { 
    path: 'addactivity', 
    component: AddactivitiesComponent 
  },

  { 
    path: 'updateactivity/:id', 
    component: UpdateactivitiesComponent
  },

  { 
    path: 'allgallery', 
    component: AllgalleryComponent
  },

  { 
    path: 'addgallery', 
    component: AddgalleryComponent
  },

  { 
    path: 'updategallery/:id', 
    component: UpdategalleryComponent
  },

  { 
    path: 'allfeedbackreview', 
    component: AllfeedbackreviewComponent
  },

  { 
    path: 'allcontact', 
    component: AllcontactComponent
  },
  
  { 
    path: 'addhome', 
    component: AddlivinghomeComponent
  },

  { 
    path: 'allhome', 
    component: AllLivinghomeComponent
  },

  { 
    path: 'updatehome/:id', 
    component: UpdatelivinghomeComponent
  },

  { 
    path: 'addpackage', 
    component: AddtourpackageComponent
  },

  { 
    path: 'allpackage', 
    component: AlltourpackageComponent
  },

  { 
    path: 'updpackage/:packageId', 
    component: UpdatetourpackageComponent
  },
  
  { 
    path: 'sidebar', 
    component: SidebarComponent
  },

  // { 
  //   path: '', 
  //   redirectTo: '/adminlogin', 
  //   pathMatch: 'full' 
  // },   

  
  { path: 'update-guide/:id', 
    component: UpdateguideComponent }, 

  

    //User Side Component Path
  { path:'', component:HomepageComponent },

 { path:'activityuser', component: ActivityuserComponent },
 { path:'galleryuser', component: GalleryuserComponent },
 { path:'feedbackuser', component: FeedbackuserComponent },
 { path:'packageuser', component:TourpackageuserComponent },
 { path:'bookinguser', component:BookinguserComponent },
 { path:'livinghomeuser', component:LivinghomeuserComponent }
  
 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
