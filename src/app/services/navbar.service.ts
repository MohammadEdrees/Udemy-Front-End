import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private readonly api ='http://localhost:28037/api/'

  constructor(private http:HttpClient) { }

  GetAllInstructors():Observable<any>{
    return this.http.get(this.api +'Instructors/GetAllInstructors');
  }

  GetAllCourses():Observable<any>{
    return this.http.get(this.api +'Courses/GetAllCourses');
  }

  GetAllTopics():Observable<any>{
    return this.http.get(this.api +'Topics/GetAllTopics');
  } 

  GetAllCategory():Observable<any>{
    return this.http.get(this.api +'Categories/GetAllCategories');
  }
}
