import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Instructor } from '../models/Instructor';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class InstructorService {

  private readonly api ='http://localhost:28037/api/'

  constructor(private http:HttpClient) { }

  // instructor registeration
  AddInstructor(ins:Instructor):Observable<any>{

    return this.http.post<Instructor>(this.api +'Instructors/InstructorRegistration',ins);
  }

  // get instructor by id 
  getInstructorById(id:number){
return this.http.get<Instructor>(this.api + 'Instructors/GetInstructorById?id=' + id);
  }

  // upload image
  uploadImg(id:number,img:any){
return this.http.post(this.api + 'Instructors/InsttImg/' + id , img);
  }


  // edit instructor
  editInstructor(id:number,instructor:any){
    return this.http.put(this.api + 'Instructors/EditInstructor/' + id , instructor);
  }
}