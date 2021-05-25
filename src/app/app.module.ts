import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents ,
    NavigationBarComponent,
    FooterComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    CarouselModule,
    MatCardModule,
    IvyCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
