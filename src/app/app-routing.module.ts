import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationInstructorComponent } from './registration-instructor/registration-instructor.component';
import {RegistrationStudentComponent} from './registration-student/registration-student.component'
import {CategoryComponent}from './category/category.component';
import {DescriptionVideoComponent} from './description-video/description-video.component';
import { EditInstrucrorComponent } from './edit-instrucror/edit-instrucror.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {component:RegistrationStudentComponent,path:'studentreg'},
  // {component:TopCategoriesComponent,path:'home/topcateg'},
  {component:HomePageComponent,path:'home'}
  ,
  {component:LoginPageComponent,path:'login' } ,
  {component:EditInstrucrorComponent,path:'editIns' } ,
  {component:EditStudentComponent,path:'editStd' } ,

  {component:RegistrationInstructorComponent,path:'instreg' } ,
  {component:CategoryComponent,path:'category'},
  {component:DescriptionVideoComponent,path:"DescriptionVideo"},
  {path:"",redirectTo:"home",pathMatch:"full"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
export const  routingComponents=[RegistrationStudentComponent,
  HomePageComponent,LoginPageComponent,RegistrationInstructorComponent]
