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

  

  // instructor registeration
  AddInstructor(ins:Instructor):Observable<any>{
    return this.http.post<Instructor>(this.api + 'Instructors/InstructorRegistration', ins);
  }
// get instructor by id (reem) 
  GetInstructor(id: number): Observable<any> {
    return this.http.get<Instructor>(this.api + 'Instructors/GetInstructorById?id=' + id);
  }

  // get instructor by id (sara)
  getInstructorById(id:number){
return this.http.get<Instructor>(this.api + 'Instructors/GetInstructorById?id=' + id);
  }

  // upload image
  uploadImg(id:number,img:any){
return this.http.post(this.api + 'Instructors/InsttImg/' + id , img);
  }
  
  // get number of student with instructor
  GetStudnetNumbersWithInstructor(id:number)
  {
    return this.http.get<number>(this.api + 'Instructors/GetStudnetNumbersWithInst?id=' + id);

  }

  // get instructor courses
  GetInstructorCourses(id: number) {
    return this.http.get<Course[]>(this.api + 'Courses/GetSortedInstructorCrs?instId=' + id);
  }


  // edit instructor
  editInstructor(id:number,instructor:any){
    return this.http.put(this.api + 'Instructors/EditInstructor/' + id , instructor);
  }

// get all instructors by category Id
  GetInstructorsByCategId(id:number){
    return this.http.get<Instructor[]>("http://localhost:28037/api/Instructors/GetInstructorsInCategory?id="+id);
  }

}