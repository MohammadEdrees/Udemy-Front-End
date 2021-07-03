import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Course}from '../models/Course';
import {Topic} from '../models/Topic';
import { Category } from '../models/Category';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly api ='http://localhost:28037/api/'
  constructor( private http:HttpClient) { }

  getAllCourses():Observable<any>{
    return this.http.get<Course[]>(this.api+"Courses/GetAllCourses/");
  }
  getAllCategruery(){
    return this.http.get<Category[]>(this.api+"Categories/GetAllCategories")
  }
  getAllTopic():Observable<any>{
    return this.http.get<Topic[]>(this.api+"Topics/GetAllTopics");
  }

  
  getSortedCourseRelatToTopic( id:number){
    return this.http.get<Course[]>(this.api+"Courses/GetSortedCoursesRelatedToTopic?id="+id);
   }

   getCourseRelatToTopic( id:number){
    return this.http.get<Course[]>(this.api+"Courses/GetCoursesByTopicId?id="+id);
   }


   getTopCategories():Observable<any>{
    return this.http.get<Category[]>(this.api+"Categories/GetTop8Categories")
    }


}
