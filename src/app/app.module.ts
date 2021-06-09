import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
 //import {TranslateHttpLoader} from'@ngx-translate/http-loader';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { FilterByInsPipe } from './navigation-bar/filter-by-ins.pipe';
import { FilterByCrsPipe } from './navigation-bar/filter-by-crs.pipe';
import { DescriptionVideoComponent } from './description-video/description-video.component'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents ,
    NavigationBarComponent,
    PasswordStrengthBarComponent,
    FooterComponent,
    CategoryComponent,
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
    ScrollingModule,
    CarouselModule,
     MatCardModule,
    IvyCarouselModule,
    // TranslateModule.forRoot({
    //   defaultLanguage:'en',
    //   loader:{
    //     provide:TranslateLoader,
    //     useFactory:createTranslateLoader,
    //     deps:[HttpClient]
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient){
//return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
