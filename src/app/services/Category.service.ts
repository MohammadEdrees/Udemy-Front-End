import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Category ,SubCateg } from '../models/Category';
import { Course } from '../models/Course';
import { Section } from '../models/Section';
import { lecture } from '../models/lecture';
import { Topic } from '../models/Topic';



@Injectable({
  providedIn: 'root'
})


export class CategoryService {
    
    // Bearer token in header 
    private getHeader( incommingHeaders?: HttpHeaders ): { headers: HttpHeaders; } {


        return {
            headers: incommingHeaders
                ? incommingHeaders
                : new HttpHeaders({
                      Authorization:
                          "Bearer " + localStorage.getItem("token"),
      
                  })
        };
      }


    getAll(){
     return this.http.get<Category[]>("http://localhost:28037/api/Categories/GetAllCategories")
    }
    getById(id:number){
        return this.http.get<Category>("http://localhost:28037/api/Categories/GetCategoryById?id="+id)
    }
    getSubByCategId(id:number){
        return this.http.get<SubCateg[]>("http://localhost:28037/api/SupCats/GetSupCategoryByCategoryId?id="+id)
    }
    constructor(private http:HttpClient) { }

    // getSubSelect(id:number){
    //   return this.http.get<SubCateg[]>("http://localhost:28037/api/SupCats/GetSupCategoryByCategoryId/"+id);
    // }

    getTopicBySubId(id:number){
        return this.http.get<Topic[]>("http://localhost:28037/api/Topics/GetTopicsBySupCatId?supCatId="+id)
    }


       getTopCategories(){
       return this.http.get<Category[]>("http://localhost:28037/api/Categories/GetTop8Categories")
       }
       getCategById(id:number){
           return this.http.get<Category>("http://localhost:28037/api/Categories/GetCategoryById?id="+id)
       }
       
       getCoursesByCategId(id:number){
           return this.http.get<Course[]>("http://localhost:28037/api/Courses/GetAllCoursesInOneCateg?id="+id)
       }
       getOrderedCoursesInCateg(id:number){
          return this.http.get<Course[]>("http://localhost:28037/api/Courses/GetOrderedCoursesInCategory?id="+id)
       }
       getOrderedCoursesInSubCateg(id:number){
           return this.http.get<Course[]>("http://localhost:28037/api/Courses/GetOrderedCoursesInSupCategory?id="+id)
        }
       getTopicsByCateg(id:number){
           return this.http.get<Topic[]>("http://localhost:28037/api/Topics/GetTopicsInCategory?id="+id)
       }
       getCoursesBySubcategId(id:number){
   
       }
      getcourseBycourseId(id:number){
         return this.http.get<Course>("http://localhost:28037/api/Courses/GetCourseById?id="+id)
      }
      getAllsectionsByCourseId(id:number){
          return this.http.get<Section[]>("http://localhost:28037/api/Courses/GetAllCourseSections?courseId="+id)
      }
      getAllLecturesBySectionId(id:number){
       return this.http.get<lecture[]>("http://localhost:28037/api/Courses/LecuresInSection?sectionId="+id)
   }


   // get sub categ by id
   GetSubCategById(id:number){
    return this.http.get<SubCateg>("http://localhost:28037/api/SupCats/GetSubCategoryById?subCatId="+id)
}


}
