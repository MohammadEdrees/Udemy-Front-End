import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { Instructor } from '../models/Instructor';
import { NavbarService } from '../services/navbar.service';
import { Course } from './../models/Course';
import { faUser, faFile } from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute, Router } from '@angular/router';
import { Category, SubCateg } from '../models/Category';
import { CategoryService } from '../services/Category.service';
import { Observable } from 'rxjs';
import { LoginService } from './../services/login.service';
import { InstructorService } from './../services/instructor.service';
import { Topic } from '../models/Topic';
import { StudentService } from './../services/student.service';




@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationBarComponent implements OnInit {

  constructor(
    private navbarService: NavbarService,          // navbar
    public categoryService: CategoryService,       // category
    public ar: ActivatedRoute,                     // Activate Route
    public loginService: LoginService,             // login
    private instrucrorService: InstructorService,  // instructor
    private studentService :StudentService  ,
    private router:Router       // student
    ) { }

  searchText: string = '';
  Instructors: Instructor[] = [];
  Courses: Course[] = [];
  Topics: Topic[] = [];
  categories: Category[] = []

  subcateg: SubCateg[] = [];
  topics: Topic[] = [];

  //assign icons
  faUser = faUser;
  faFile = faFile;

  // check if login or not
  login: boolean = false; // return observable
  isLoggedIn: Observable<boolean> | undefined;

// check the role 
isInstructor:boolean=false;
isStudent:boolean=false;

// check if have image or not 
isImg:boolean=false;

  // frist char circle
  char: string = '';
  toggle: boolean = false;


  //loginned instructor
  user: any | undefined;

  ngOnInit(): void {

    //---------------get all Instructors-----------------
    this.navbarService.GetAllInstructors().subscribe(
      (res: any) => {
        this.Instructors = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )

    //---------------get all Courses-----------------
    this.navbarService.GetAllCourses().subscribe(
      (res: any) => {
        this.Courses = res;
        console.log(res);
      },
      err => {
        console.log(err);

      }
    )


    //---------------get all topics-----------------
    this.navbarService.GetAllTopics().subscribe(
      (res: any) => {
        this.Topics = res;
        console.log(res);
      },
      err => {
        console.log(err);

      }
    )


 

    this.loginService.isLoggedIn.subscribe(
      (d: any) => {
        this.login = d;
        console.log(`is login :`, this.login);
        let loginId = Number(localStorage.getItem('LoginedId'));

        if (d == true) {
          let role = localStorage.getItem('class');
          if (role == 'instructor') { 
          this.instrucrorService.getInstructorById(loginId).subscribe(
            res => {
              console.log(res);
              this.user = res;
              this.char = res?.fname?.charAt(0).toUpperCase();
              this.isInstructor=true;

              if(res.imagPath!=null){
                this.isImg=true;
              }

            }
          )
          }
         
          if(role == 'student'){
            this.studentService.GetStudent(loginId).subscribe(
              res => {
                console.log(res.imagPath);
                this.user = res;
                this.char = res?.fname?.charAt(0).toUpperCase();
                this.isStudent=true;
                if(res.imagPath!=null){
                  this.isImg=true;
                }
              }
            )
          }
        } else {
          this.isStudent = this.isInstructor = false ;
        }
      })

    this.categoryService.getAll().subscribe(
      d => {

        this.categories = d;
      }
    )
  }


  GoToInstructorProfile(instId:number)
  {
     this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
          this.router.navigate(['/topnav/InsProfile/',instId]);
     });
  }

  GoToCourse(crsId:number){
    this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/topnav/course/',crsId]);
 });
  }


  AddId(_id: number) {
    console.log(_id);
    this.ar.params.subscribe(
      a => {
        console.log(a['_id']);
        this.categoryService.getSubByCategId(_id).subscribe(
          d => {
            console.log(d);
            this.subcateg = d;
          }
        )
      }
    )
  }

  AddTopic(_id: number) {
    console.log(_id);
    this.ar.params.subscribe(
      a => {
        console.log(a['_id']);
        this.categoryService.getTopicBySubId(_id).subscribe(
          d => {
            console.log(d);
            this.topics = d;
          }
        )
      }
    )
  }




  // logout 
  logout() {
    this.loginService.logout();
    this.router.navigate(['topnav/login']);
  }
}
