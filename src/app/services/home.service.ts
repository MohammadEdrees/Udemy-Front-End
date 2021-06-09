import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Course}from '../models/Course';
import {Topic} from '../models/Topic';
import{Category} from '../models/categery'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly api ='http://localhost:28037/api/'
  constructor( private http:HttpClient) { }

  getAllCourses(){
    return this.http.get<Course[]>(this.api+"Courses/GetAllCourses/");
  }
  getAllCategruery(){
    return this.http.get<Category[]>(this.api+"Categories/GetAllCategories")
  }
  getAllTopic(){
    return this.http.get<Topic[]>(this.api+"Topics/GetAllTopics");
  }

  getTopicRelatCourse( id:number){
   return this.http.get<Course[]>(this.api+"Courses​/GetTopCoursesbyStudents/"+id);


  }


}
