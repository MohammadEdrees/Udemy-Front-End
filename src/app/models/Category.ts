export class Category{
    constructor(
  public categoryId:number,
 public  categoryName:string,
 public supCategs:any,
 public imgPath:string,

    ){}
}


export class SubCateg{
  constructor(
public supCatId :number,
public supCatTitle:string


  ){}
}

