import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Student } from '../models/Student';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class StudentService {

 

  constructor(private http:HttpClient) { }

  PutStudent(std:Student){

    return this.http.post<Student>('http://localhost:28037/api/Students/StudentRegistration',std);
  }


}