import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Instructor } from '../models/Instructor';
import { NavbarService } from '../services/navbar.service';
import { Course } from './../models/Course';
import {faUser,faFile} from '@fortawesome/free-solid-svg-icons' 
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Topic,SubCateg } from '../models/Category';
import {CategoryService} from '../services/Category.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationBarComponent implements OnInit {

  constructor(private navbarService: NavbarService,public categoryService:CategoryService, public ar:ActivatedRoute) { }

  searchText:string='';
Instructors:Instructor[]=[];
Courses:Course[]=[];
categories:Category[]=[]
 
subcateg:SubCateg []=[];
topics:Topic []=[];

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

 
 
this.categoryService.getAll().subscribe(
  d=>{
 
    this.categories=d;
  }
)
  }


AddId(_id:number){
  console.log(_id);
  this.ar.params.subscribe(
    a=>{
      console.log(a['_id']);
      this.categoryService.getSubByCategId(_id).subscribe(
       d=>{
        console.log(d);
        this.subcateg=d;
       }
     )
     }
  )
}

AddTopic(_id:number){
 console.log(_id);
  this.ar.params.subscribe(
    a=>{
      console.log(a['_id']);
      this.categoryService.getTopicBySubId(_id).subscribe(
       d=>{
        console.log(d);
        this.topics=d;
       }
     )
     }
  )
}
  }
