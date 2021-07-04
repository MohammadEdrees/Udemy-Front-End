import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, SubCateg } from '../models/Category';
import { Course } from '../models/Course';
import { Instructor } from '../models/Instructor';
import { Topic } from '../models/Topic';
import { CategoryService } from '../services/Category.service';
import { NavbarService } from '../services/navbar.service';
import { InstructorService } from './../services/instructor.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  courses:Course[]=[];
  subcateg:SubCateg |undefined;
  Topics:Topic[]=[];
  Instructors:Instructor[]=[];
 iscategory:boolean=false;
 p:number=1;
  constructor(private route:ActivatedRoute,
    private categoryService:CategoryService,
    private InstructorService:InstructorService,
    private navbarService: NavbarService) { }

  ngOnInit(): void {
     //get Subcategory By Id
     this.route.paramMap
     .subscribe(params => {
       let id =Number( params.get('supCatId'))|| 0;
       console.log(id);
       this.categoryService.GetSubCategById(id ).subscribe(
        (d:any)=>{
          console.log(d[0],"subcate");
          this.subcateg=d[0];
        
         }
       )})
   //get Courses in subcategory
   this.route.paramMap
   .subscribe(params => {
     let id =Number( params.get('supCatId'))|| 0;
     console.log(id);
     this.categoryService.getOrderedCoursesInSubCateg(id ).subscribe(
      (d)=>{
        console.log(d);
        this.courses=d;

     }
     )})
         //---------------get all topics-----------------
    // this.navbarService.GetAllTopics().subscribe(
    //   (res: any) => {
    //     this.Topics = res;
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);

    //   }
    // )

    //Topics in subcategory
         this.route.paramMap
         .subscribe(params => {
           let id =Number( params.get('supCatId'))|| 0;
           console.log(id);
           this.categoryService.getTopicBySubId(id ).subscribe(
            (d)=>{
              console.log(d);
              this.Topics=d;
   
           }
           )})


        
                 //Instructors in subcategory
          this.route.paramMap
          .subscribe(params => {
            let id =Number( params.get('supCatId'))|| 0;
            console.log(id);
            this.InstructorService.GetInstructorsByCategId(id ).subscribe(
             (d)=>{
               console.log(d);
               this.Instructors=d;
             
            }
            )})
     
  }

}