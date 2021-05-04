import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationStudentComponent } from './registration-student/registration-student.component';
import { RegistrationInstructorComponent } from './registration-instructor/registration-instructor.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { CourseComponent } from './course/course.component';
import { UploadCourseComponent } from './upload-course/upload-course.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents ,
    HomePageComponent,
    RegistrationStudentComponent,
    RegistrationInstructorComponent,
    LoginPageComponent,
    NavigationBarComponent,
    ProfileComponent,
    CategoryComponent,
    CourseComponent,
    UploadCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
