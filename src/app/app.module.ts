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
 import { CarouselModule } from 'ngx-owl-carousel-o';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterByInsPipe } from './navigation-bar/filter-by-ins.pipe';
import { FilterByCrsPipe } from './navigation-bar/filter-by-crs.pipe'
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
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

import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { DescriptionVideoComponent } from './description-video/description-video.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {PopoverModule} from "ngx-smart-popover";
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
    DescriptionVideoComponent

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
   
    MatSidenavModule,

    ScrollingModule,
    CarouselModule,
    MatCardModule,
    IvyCarouselModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatIconModule ,
    PopoverModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

