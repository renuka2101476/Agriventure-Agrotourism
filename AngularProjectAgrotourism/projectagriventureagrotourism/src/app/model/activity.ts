export class Activity 
{
    activityId:number;
    activityName:string;
    activityDescription:string;
    image: Uint8Array;

    constructor()
    {
        this.activityId=0;
        this.activityName="";
        this.activityDescription="";
        this.image = new Uint8Array();
    }
}

