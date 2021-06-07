import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Instructor } from '../models/Instructor';
import { NavbarService } from '../services/navbar.service';
import { Course } from './../models/Course';
import {faUser,faFile} from '@fortawesome/free-solid-svg-icons' 
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationBarComponent implements OnInit {

  constructor(private navbarService: NavbarService) { }

  searchText:string='';
Instructors:Instructor[]=[];
Courses:Course[]=[];


//assign icons
faUser=faUser;
faFile=faFile;


  ngOnInit(): void {
    //---------------get all Instructors-----------------
this.navbarService.GetAllInstructors().subscribe(
  (res:any)=>{
    this.Instructors=res;
    console.log(res);
  },
  err=>{
    console.log(err);
  }
)

//---------------get all Courses-----------------
this.navbarService.GetAllCourses().subscribe(
  (res:any)=>{
    this.Courses=res;
    console.log(res);
  },
  err=>{
    console.log(err);
  }
)

  }

  







}
