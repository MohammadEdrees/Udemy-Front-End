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

  AddInstructor(ins:Instructor):Observable<any>{

    return this.http.post<Instructor>(this.api +'Instructors',ins);
  }


}