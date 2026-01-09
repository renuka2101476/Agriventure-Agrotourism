/*export class FeedbackReview
{
    public feedbackID:number;
    public customerName:string;
    public email:string;
    public rating:string;
    public feedbackDate:string;
    public agrotourismService:string;
    public commentsuggestions:string;

    constructor()
    {
        this.feedbackID=0;
        this.customerName="";
        this.email="";
        this.rating="";
        this.feedbackDate="";
        this.agrotourismService="";
        this.commentsuggestions="";
    }
}*/

export class FeedbackReview {
    feedbackID: number;
    customerName: string;
    email: string;
    rating: number;
    feedbackDate: Date;
    agrotourismService: string;
    commentsuggestions: string;

    constructor() {
        this.feedbackID = 0;
        this.customerName = "";
        this.email = "";
        this.rating = 0;
        this.feedbackDate = new Date(); 
        this.agrotourismService = "";
        this.commentsuggestions = "";
    }
}