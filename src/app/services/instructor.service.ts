import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instructor } from '../models/Instructor';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';



@Injectable({
  providedIn: 'root'
})


export class InstructorService {

  private readonly api = 'http://localhost:28037/api/'

  constructor(private http: HttpClient) { }

  AddInstructor(ins: Instructor): Observable<any> {

    return this.http.post<Instructor>(this.api + 'Instructors/InstructorRegistration', ins);
  }

  GetInstructor(id: number): Observable<any> {
    return this.http.get<Instructor>(this.api + 'Instructors/GetInstructorById?id=' + id);
  }

  GetStudnetNumbersWithInstructor(id:number)
  {
    return this.http.get<number>(this.api + 'Instructors/GetStudnetNumbersWithInst?id=' + id);

  }

  GetInstructorCourses(id: number) {
    return this.http.get<Course[]>(this.api + 'Courses/GetSortedInstructorCrs?instId=' + id);
  }

}