import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationStudentComponent} from './registration-student/registration-student.component' 
const routes: Routes = [
  {component:RegistrationStudentComponent,path:'stdregister'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
export const  routingComponents=[RegistrationStudentComponent]
