import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';
import { CourseSections } from '../models/course-sections';
import { CourseLecture } from '../models/course-lecture';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly api = 'http://localhost:28037/api/'

  constructor(private http: HttpClient) { }

  GetCourseById(crsId: number) {

    return this.http.get<Course>(this.api + 'Courses/GetCourseById?id=' + crsId);

  }
  GetAllSectionsByCrsId(courseId: number): Observable<any> {
    return this.http.get<CourseSections>(this.api + 'Courses/GetAllCourseSections?courseId=' + courseId);
  }

  GetAllLecturesBySectionId(SectionId: number): Observable<any> {
    //Generate Lectures Id
    return this.http.get<CourseLecture[]>(this.api + 'Courses/LecuresInSection?sectionId=' + SectionId);
  }

  GetLectureById(LecId: number) {
    return this.http.get<CourseLecture>(this.api + 'Courses/GetLecture?LecID=' + LecId);
  }

  GetFirstLecture(CrsID: number): Observable<any> {
    return this.http.get<CourseLecture>(this.api + 'Courses/GetFirstLectue?CrsID=' + CrsID);
  }

  GetStudentCourses(id: number) {
    return this.http.get<Course[]>(this.api + 'Courses/GetStudentCourses?StdId=' + id);
  }


  // create new course 
  addNewCourse(instId: number, course: any) {
    return this.http.put(this.api + 'Courses/AddInstructorCourse/' + instId, course);
  }

   // upload course image
   uploadCrsImg(id:number,img:any){
    return this.http.put(this.api + 'Courses/CousreImageUpload/' + id , img);
      }
}
