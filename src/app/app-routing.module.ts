import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationInstructorComponent } from './registration-instructor/registration-instructor.component';
import {RegistrationStudentComponent} from './registration-student/registration-student.component' 
import {CategoryComponent}from './category/category.component'
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { PreCourseCreationComponent } from './pre-course-creation/pre-course-creation.component';
import { SideNavComponent} from './side-nav/side-nav.component';
import { UdemyProfileComponent } from './udemy-profile/udemy-profile.component';
import { Course } from './models/Course';
import { CourseComponent } from './course/course.component';
import { XyzComponent } from './xyz/xyz.component';
import {PerformanceComponent} from './performance/performance.component';
import { ToolsComponent } from './tools/tools.component';
import { ResourseComponent } from './resourse/resourse.component';
import {DescriptionVideoComponent} from './description-video/description-video.component';
import { EditInstrucrorComponent } from './edit-instrucror/edit-instrucror.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AuthGuard } from './guards/auth.guard';
import { CreatVideoComponent } from './creat-video/creat-video.component';


const routes: Routes = [
  {component:RegistrationStudentComponent,path:'studentreg'},
  // {component:TopCategoriesComponent,path:'home/topcateg'},
  {component:HomePageComponent,path:'home'}
  ,
  {component:LoginPageComponent,path:'login' } ,
  {component:EditInstrucrorComponent,path:'editIns' } ,
  {component:EditStudentComponent,path:'editStd' } ,

  {component:RegistrationInstructorComponent,path:'instreg' } ,
 
  {component:PreCourseCreationComponent,path:'preCourseCreation' } ,
  {component:SideNavComponent,path:'SideNav' } ,
  {component:UdemyProfileComponent,path:'udemy-profile' } ,
  {component:XyzComponent,path:'communication'},
/*{component:CourseComponent,path:'course'},*/
  {component:PerformanceComponent,path:'performance'},
  {component:ToolsComponent,path:'Tools'},
  {component:ResourseComponent,path:'resourse'},
  {component:CategoryComponent,path:'category'},
  {component:DescriptionVideoComponent,path:"DescriptionVideo"},
  {component:CreatVideoComponent,path:"CreatVideo"},
  {path:"",redirectTo:"home",pathMatch:"full"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
export const  routingComponents=[RegistrationStudentComponent,
  HomePageComponent,LoginPageComponent,RegistrationInstructorComponent,PreCourseCreationComponent]
