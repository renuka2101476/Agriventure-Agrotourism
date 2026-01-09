import { Guide } from "./guide";
import { LivingHome } from "./livinghome";
import { TourPackage } from "./tourpackage";

/*export class Booking{

    // bookingId:number;
    // custName:string;
    // custMoNo:string;
    // custEmail:string;  
    // totalMembers:string;  
    // bookingDate:Date;
    // guide:Guide[];
    // tourPackage:TourPackage[];
    // liveHome:LivingHome[];

    // constructor(){
    //     this.bookingId=0;
    //     this.custName="";
    //     this.custMoNo="";
    //     this.custEmail="";
    //     this.totalMembers="";
    //     this.bookingDate= new Date();
    //     this.guide=[];
    //     this.tourPackage=[];
    //     this.liveHome=[];
    // }

    bookingId:number;;
    custName:string;
    custMoNo:string;
    custEmail:string; 
    bookingDate:Date;
    totalMembers:string;
   
    guide:Guide[] ;
    tourPackage: TourPackage[]; 
    liveHome:LivingHome[];
   
   constructor(){
       this.bookingId=0;
       this.custName="";
       this.custMoNo="";
       this.custEmail="";
       this.bookingDate= new Date();
       this.totalMembers="";
       this.guide=[];
       this.tourPackage=[];
       this.liveHome=[];
       
   }
}*/


/*export class Booking {
    bookingId: number;
    custName: string;
    custMoNo: string;
    custEmail: string;
    totalMembers: string;
    bookingDate: Date;
    guide:Guide[] ;
    tourPackage: TourPackage[]; 
    liveHome:LivingHome[];
    bookingAmt: string;
    bookingStatus: string;

    constructor(){
        this.bookingId=0;
        this.custName="";
        this.custMoNo="";
        this.custEmail="";
        this.bookingDate= new Date();
        this.totalMembers="";
        this.guide=[];
        this.tourPackage=[];
        this.liveHome=[];
        this.bookingAmt="";
        this.bookingStatus="";
        
    }
  }*/


  export class Booking {
    bookingId: number;
    custName: string;
    custMoNo: string;
    custEmail: string;
    totalMembers: string;
    bookingDate: Date;
    guide: Guide;  // Change from Guide[] to Guide
    tourPackage: TourPackage;  // Change from TourPackage[] to TourPackage
    liveHome: LivingHome;  // Change from LivingHome[] to LivingHome
    bookingAmt: string;
    bookingStatus: string;

    constructor() {
        this.bookingId = 0;
        this.custName = "";
        this.custMoNo = "";
        this.custEmail = "";
        this.bookingDate = new Date();
        this.totalMembers = "";
        this.guide = {} as Guide;  // Initialize as single object
        this.tourPackage = {} as TourPackage;  // Initialize as single object
        this.liveHome = {} as LivingHome;  // Initialize as single object
        this.bookingAmt = "";
        this.bookingStatus = "Confirm";
    }
}