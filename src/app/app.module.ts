import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CategoryComponent } from './category/category.component';
import {MatTabsModule} from '@angular/material/tabs';
 import {MatCardModule} from '@angular/material/card';
 import {IvyCarouselModule} from 'angular-responsive-carousel';
 //import { CarouselModule } from 'ngx-owl-carousel-o';
 //import {TranslateHttpLoader} from'@ngx-translate/http-loader';
 // For MDB Angular Free
import { CarouselModule } from 'angular-bootstrap-md';
import {MatInputModule} from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

import { CreatVideoComponent } from './creat-video/creat-video.component'
//  import { CarouselModule } from 'ngx-owl-carousel-o';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';



import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterByInsPipe } from './navigation-bar/filter-by-ins.pipe';
import { FilterByCrsPipe } from './navigation-bar/filter-by-crs.pipe'
import {MatAutocompleteModule} from '@angular/material/autocomplete';

// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { PreCourseCreationComponent } from './pre-course-creation/pre-course-creation.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import{MatSidenavModule}from '@angular/material/sidenav';
import { XyzComponent } from './xyz/xyz.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UdemyProfileComponent } from './udemy-profile/udemy-profile.component';
import { PerformanceComponent } from './performance/performance.component';
import { ToolsComponent } from './tools/tools.component';
import { ResourseComponent } from './resourse/resourse.component';


import { EditInstrucrorComponent } from './edit-instrucror/edit-instrucror.component';

import { DescriptionVideoComponent } from './description-video/description-video.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {PopoverModule} from "ngx-smart-popover";
import { EditStudentComponent } from './edit-student/edit-student.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { FilterByTopicPipe } from './navigation-bar/filter-by-topic.pipe';
import { NavbarCategoryComponent } from './navbar-category/navbar-category.component';
import { UploadCourseComponent } from './upload-course/upload-course.component';
import { UdemyErorrComponent } from './udemy-erorr/udemy-erorr.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { CourseComponent } from './course/course.component';
import { DesignTopicComponent } from './design-topic/design-topic.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SubCategoryComponent } from './sub-category/sub-category.component'; 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents ,
    NavigationBarComponent,
    PasswordStrengthBarComponent,
    FooterComponent,
    CategoryComponent,
    TopCategoriesComponent,
    PreCourseCreationComponent,
    SideNavComponent,
    XyzComponent,
    ToolbarComponent,
    UdemyProfileComponent,
    PerformanceComponent,
    ToolsComponent,
    ResourseComponent,
    EditInstrucrorComponent,
    FilterByInsPipe,
    FilterByCrsPipe,
    DescriptionVideoComponent,
    EditStudentComponent,
    CreatVideoComponent,
    CourseContentComponent,
    InstructorProfileComponent,
    StudentCoursesComponent,
    FilterByTopicPipe,
    NavbarCategoryComponent,
    UploadCourseComponent,
    UdemyErorrComponent,
    CommingSoonComponent,
    CourseComponent,
    DesignTopicComponent,
    SubCategoryComponent

  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatTabsModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatSidenavModule,
    ScrollingModule,
    CarouselModule,
    MatCardModule,
    IvyCarouselModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule ,
    PopoverModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap:[AppComponent],
  schemas:[
    
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }


