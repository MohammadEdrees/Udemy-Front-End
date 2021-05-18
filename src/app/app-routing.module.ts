import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationInstructorComponent } from './registration-instructor/registration-instructor.component';
import {RegistrationStudentComponent} from './registration-student/registration-student.component' 
import {CategoryComponent}from './category/category.component'
const routes: Routes = [
  {component:RegistrationStudentComponent,path:'studentreg'},
  {component:HomePageComponent,path:'home' } ,
  {component:LoginPageComponent,path:'login' } ,
  {component:RegistrationInstructorComponent,path:'instreg' } ,
  {component:CategoryComponent,path:'category'},
  {path:"",redirectTo:"home",pathMatch:"full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
export const  routingComponents=[RegistrationStudentComponent,
  HomePageComponent,LoginPageComponent,RegistrationInstructorComponent]
