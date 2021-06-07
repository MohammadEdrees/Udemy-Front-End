import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Category ,SubCateg,Topic } from '../models/Category';



@Injectable({
  providedIn: 'root'
})


export class CategoryService {
    getAll(){
     return this.http.get<Category[]>("http://localhost:28037/api/Categories/GetAllCategories")
    }
    getById(id:number){
        return this.http.get<Category>("http://localhost:28037/api/Categories/GetCategoryById?id="+id)
    }
    getSubByCategId(id:number){
        return this.http.get<SubCateg[]>("http://localhost:28037/api/SupCats/GetSupCategoryByCategoryId?id="+id)
    }
    constructor(private http:HttpClient) { }

    getTopicBySubId(id:number){
        return this.http.get<Topic[]>("http://localhost:28037/api/Topics/GetTopicsBySupCatId?supCatId="+id)
    }

}