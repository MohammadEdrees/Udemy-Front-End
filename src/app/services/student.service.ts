import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Student } from '../models/Student';

import { Observable } from 'rxjs';
import { Course } from '../models/Course';



@Injectable({
  providedIn: 'root'
})


export class StudentService {

 
  private readonly api ='http://localhost:28037/api/';

  constructor(private http:HttpClient) { }

  GetStudent(StdId:number)
  {
    return this.http.get<Student>(this.api +'Students/GetStudentById?StdId='+StdId);
  }

  PutStudent(std:Student){

    return this.http.post<Student>(this.api +'Students/StudentRegistration',std);
  }

  deleteEnroll(StdId:number,crsId:number)
  {
    return this.http.delete<Course[]>(this.api +'Courses/DeleteCourseEnrollment?crsId=' + crsId +'&stdId='+ StdId );
  }
}