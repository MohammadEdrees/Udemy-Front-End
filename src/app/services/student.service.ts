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

  // get student by Id
  GetStudent(StdId:number)
  {
    return this.http.get<any>(this.api +'Students/GetStudentById?StdId='+StdId);
  }

  // add new student
  PutStudent(std:Student){

    return this.http.post<Student>(this.api +'Students/StudentRegistration',std);
  }

  // edit student
  editStudent(id:number,student:any){
    return this.http.put(this.api + 'Students/EditStudent/' + id , student);
  }

    // upload student image
    uploadImg(id:number,img:any){
      return this.http.post(this.api + 'Students/StudentImg/' + id , img);
        }

  // delete enroll on course
  deleteEnroll(StdId:number,crsId:number)
  {
    return this.http.delete<Course[]>(this.api +'Courses/DeleteCourseEnrollment?crsId=' + crsId +'&stdId='+ StdId );
  }

  // enroll in course
  AddEnroll(crsId:any,stdId:number)
  {
    //http://localhost:28037/api/Students/AddCourseEnrollment?crsId=1011&stdId=3
    return this.http.post<Course>(this.api+'Students/AddCourseEnrollment?crsId='+crsId+'&stdId='+stdId,null);
  }

// Delete student
  deleteStudent(StdId:number)
  {
    return this.http.delete<Course[]>(this.api +'Topics/DeleteStudentByHisId?id=' + StdId );
  }


}
