import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, SubCateg } from '../models/Category';
import { Course } from '../models/Course';
import { Instructor } from '../models/Instructor';
import { Topic } from '../models/Topic';
import { CategoryService } from '../services/Category.service';
import { InstructorService } from './../services/instructor.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  category!:Category;
  courses:Course[]=[];
  subcateg:SubCateg []=[];
  Topics:Topic[]=[];
  Instructors:Instructor[]=[];
 
  constructor(private route:ActivatedRoute,
    private categoryService:CategoryService,
    private InstructorService:InstructorService,
    private router:Router   ) { }

  ngOnInit(): void {
   
   let id=0
   this.route.params.subscribe(
      a => {
        id = a['categoryId'];
      }
    );
    


      this.categoryService.getCategById(id).subscribe(
       d=>{
         this.category=d;
          console.log("Category",this.category);
        },err =>
        {
          console.log("Get Categore Error",err);
        }
      );

        this.categoryService.getOrderedCoursesInCateg(id).subscribe(
         (d)=>{
           this.courses=d;
           console.log("courses",this.courses);
        },err =>
        {
          console.log("Get getOrderedCoursesInCateg Error",err);
        }
        )


          this.categoryService.getTopicsByCateg(id ).subscribe(
           (d)=>{
             this.Topics=d;
            console.log("topics",this.Topics);
          },err =>
        {
          console.log("Get getTopicsByCateg Error",err);
        }
          )

 
            this.InstructorService.GetInstructorsByCategId(id ).subscribe(
             (d)=>{
               this.Instructors=d;
               console.log("Instructors",this.Instructors);
            },err =>
        {
          console.log("Get GetInstructorsByCategId Error",err);
        }
            )
          
            this.route.paramMap
            .subscribe(params => {
              let id =Number( params.get('supCatId'))|| 0;
              console.log(id);
              this.categoryService.getOrderedCoursesInSubCateg(id).subscribe(
               (d)=>{
                 console.log(d);
                 this.courses=d;
              }
              )})
     
  }


  GoTotopics(topId:number){
    this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/topnav/topic/',topId]);
 });
  }



}
