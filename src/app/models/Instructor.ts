
// registeration model
export class Instructor {
    constructor(
      public address:string,
      public password:string,
      public imagPath:string,
      public phone : number,
      public mail : string,
      public shoppingCard: any,
      public instCrs: any, 
      public communication: any,
      public fname: string,
      public lname: string,
      public language: string,
      public headLine: string,
      public biography: string,
      public instId?:number
    ) { }

}


// edit instructor model 
export class editInstructor {
  constructor(
    public card: any,
    public courses: any,
    public token: any,
    public instId: number,
    public address:string,
    public password:string,
    public imagPath:string,
    public phone : number,
    public mail : string,
    public shoppingCard: any,
    public instCrs: any, 
    public communication: any,
    public fname: string,
    public lname: string,
    public language: string,
    public headLine: string,
    public biography: any,
    public _Class: string,
    public cId: any
  ) { }

}


