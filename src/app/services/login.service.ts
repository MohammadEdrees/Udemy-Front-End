import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/Student';
import { Instructor } from './../models/Instructor';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient , private router: Router) { }

  private readonly api ='http://localhost:28037/api/'

  public loggedIn = new BehaviorSubject<boolean>(false); // {1}
  isAuthenticated: boolean =false;

   // isLoggedIn function
  get isLoggedIn() {
    this.autoDetactUser();
    return this.loggedIn.asObservable(); // {2}
  }


  // login function
  login(_email: string, password: string){
    return this.http.post<{returnObj:Student | Instructor}>(this.api +'Login/login', {mail: _email, password: password})
  }

// logout
logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('LoginedId');
  localStorage.removeItem('class');

  this.loggedIn.next(false);
  this.isAuthenticated =false;
  this.router.navigate(['/login']);
}



  // return true if loginned
isAuth(){
    return this.isAuthenticated;
  }

// return token
getToken(){
  return localStorage.getItem('token');
}


autoDetactUser(){
  const userToken = this.getToken();
  if (userToken) {
    this.isAuthenticated = true;
    this.loggedIn.next(true);
  }
}


}
