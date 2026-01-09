import { Activity } from "./activity";

export class TourPackage{

    packageId:number;
    packageName:string;
    packagePrice:string;
    //packagePrice:number;  
    activitiesName:Activity[];
    packageDescription:string;

    constructor(){
        this.packageId=0;
        this.packageName="";
        this.packagePrice="";
        //this.packagePrice=0;
        this.activitiesName=[];
        this.packageDescription="";
    }
}