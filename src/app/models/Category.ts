export class Category{
    constructor(
  public categoryId:number,
 public  categoryName:string,
 public supCategs:any

    ){}
}
export class SubCateg{
  constructor(
public supCatId :number,
public supCatTitle:string


  ){}
}
export class Topic{
  constructor(
public TopId:number,
public  topName:string


  ){}
}
