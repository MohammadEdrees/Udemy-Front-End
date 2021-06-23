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
import { ProfileComponent } from './profile/profile.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';

const routes: Routes = [

  //------------------ sidnav router outlet -----------------
  {
    component: SideNavComponent, path: 'sidnav',
    children: [

      { path: 'pre', component: PreCourseCreationComponent },
      { component: XyzComponent, path: 'communication' },
      { component: PerformanceComponent, path: 'performance' },
      { component: ToolsComponent, path: 'Tools' },
      { component: ResourseComponent, path: 'resourse' },
      { component: CreatVideoComponent, path: "pre/CreatVideo" },
      {component:EditInstrucrorComponent,path:'editIns/:id' } ,

      { path: '', redirectTo: 'pre', pathMatch: 'full' }

    ]
  },

  //------------------ topnav router outlet -----------------
  {
    component: UdemyProfileComponent, path: 'topnav',
    children: [

      { path: 'home', component: HomePageComponent },
      { component: LoginPageComponent, path: 'login' },
      { component: RegistrationInstructorComponent, path: 'instreg' },
      { component: RegistrationStudentComponent, path: 'studentreg' },
      { component: CategoryComponent, path: 'category' },
      { component: InstructorProfileComponent, path: 'InsProfile/:id' },
      {component:CourseContentComponent,path:'Content/:id'},
      {component:StudentCoursesComponent,path:'StdCrs/:id'},
      { path: '', redirectTo: 'home', pathMatch: 'full' }

    ]
  },

  { path: "", redirectTo: "topnav", pathMatch: "full" },
  { path: "**", redirectTo: "topnav" },

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
