import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationInstructorComponent } from './registration-instructor/registration-instructor.component';
import { RegistrationStudentComponent } from './registration-student/registration-student.component'
import { CategoryComponent } from './category/category.component'
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { PreCourseCreationComponent } from './pre-course-creation/pre-course-creation.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UdemyProfileComponent } from './udemy-profile/udemy-profile.component';
import { Course } from './models/Course';
import { CourseComponent } from './course/course.component';
import { XyzComponent } from './xyz/xyz.component';
import { PerformanceComponent } from './performance/performance.component';
import { ToolsComponent } from './tools/tools.component';
import { ResourseComponent } from './resourse/resourse.component';
import { DescriptionVideoComponent } from './description-video/description-video.component';
import { EditInstrucrorComponent } from './edit-instrucror/edit-instrucror.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AuthGuard } from './guards/auth.guard';
import { CreatVideoComponent } from './creat-video/creat-video.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { UploadCourseComponent } from './upload-course/upload-course.component';

import { UdemyErorrComponent } from './udemy-erorr/udemy-erorr.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { DesignTopicComponent } from './design-topic/design-topic.component';


const routes: Routes = [

  //------------------ sidnav router outlet -----------------
  {
    component: SideNavComponent, path: 'sidnav',
  
    children: [

      { path: 'pre', component: PreCourseCreationComponent },
      { component: XyzComponent, path: 'communication' },
      { component: PerformanceComponent, path: 'performance'},
      { component: ToolsComponent, path: 'Tools' },
      { component: ResourseComponent, path: 'resourse' },
      { component: CreatVideoComponent, path: "pre/CreatVideo" },
      {component:EditInstrucrorComponent,path:'editIns/:id' } ,
      {component:UploadCourseComponent,path:'ManageCourse/:id'},

      { path: '', redirectTo: 'pre', pathMatch: 'full' }

    ]
  },

  // {component:UploadCourseComponent,path:'ManageCourse/:id'},

  //------------------ topnav router outlet -----------------
  {
    component: UdemyProfileComponent, path: 'topnav',
    children: [

      { path: 'home', component: HomePageComponent },
      { component: LoginPageComponent, path: 'login' },
      { component: RegistrationInstructorComponent, path: 'instreg' },
      { component: RegistrationStudentComponent, path: 'studentreg' },
      { component: CategoryComponent, path: 'category/:categoryId' },
      { component: CategoryComponent, path: 'subcategory/:supCatId' },
      { component: InstructorProfileComponent, path: 'InsProfile/:id' },
      {component:CourseContentComponent,path:'Content/:id'},
      {component: CourseComponent, path: 'course/:crsId'},
      {component:StudentCoursesComponent,path:'StdCrs/:id'},
      {component:EditStudentComponent,path:'editStd/:id' } , 
      {component:CommingSoonComponent,path:'comming'},
      {component:DesignTopicComponent,path:'topic/:id'},
      { path: '', redirectTo: 'home', pathMatch: 'full' }

    ]
  },

  { path: "", redirectTo: "topnav", pathMatch: "full" },
  { path: "**", component:UdemyErorrComponent },

  //-----------------------------------------------------

  // {component:EditInstrucrorComponent,path:'editIns' } ,
  // {component:EditStudentComponent,path:'editStd' } ,
  // {component:DescriptionVideoComponent,path:"DescriptionVideo"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationStudentComponent,
  HomePageComponent, LoginPageComponent, RegistrationInstructorComponent, PreCourseCreationComponent]
