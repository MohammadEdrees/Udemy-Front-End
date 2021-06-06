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

  GetAllCategory():Observable<any>{
    return this.http.get(this.api +'Categories/GetAllCategories');
  }
}
