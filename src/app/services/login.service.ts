import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/Student';
import { Instructor } from './../models/Instructor';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient , private router: Router) { }

  private readonly api ='http://localhost:28037/api/'
 helper = new JwtHelperService();
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
  //this.router.navigate(['/topnav/login']);
}



  // return true if loginned
isAuth(){
    return this.isAuthenticated;
  }

// return token
getToken(){
  return localStorage.getItem('token');
}

// return role ( Instructor or Student)
getRole(){
  return localStorage.getItem('class');
}

autoDetactUser(){
  const userToken = this.getToken()?.toString();
  console.log('is expired',this.helper.isTokenExpired(userToken));

  if (!this.helper.isTokenExpired(userToken)) {
    this.isAuthenticated = true;
    this.loggedIn.next(true);
  }else{
    this.logout();
  }
}


}
