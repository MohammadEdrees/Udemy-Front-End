import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';
import { CourseSections } from '../models/course-sections';
import { CourseLecture } from '../models/course-lecture';
import { lecture } from '../models/lecture';
import { Topic } from './../models/Topic';
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

   // get topics by supCateogry Id
   getTopicsBySubCateogryId(subcategId:number){
    return this.http.get<Topic[]>(this.api + 'Topics/GetTopicsBySupCatId?supCatId=' + subcategId);
   }   

  // get course section    
  GetCourseSections(id:number)
  {
    return this.http.get<CourseSections[]>(this.api+'Courses/GetCourseSections?crsId='+id);

  }

  // Add new course section
  AddCourseSection(CrsId:number,courseSection:CourseSections)
  {
    return this.http.put<CourseSections[]>(this.api+'Courses/AddCourseSection/'+CrsId,courseSection);
  }

  // Add lecture on section
  AddSectionLecture(sectionId:number,sectionLecture:CourseLecture)
  {
    return this.http.put<CourseLecture[]>(this.api+'Courses/AddLecture/'+ sectionId ,sectionLecture);
  }

// get course lectures
  GetCourseLectures(id:number)
  {
    return this.http.get<CourseLecture[]>(this.api+'Courses/GetCourseLectures?crsId='+id);
  }

  // delete  section
  DeleteCourseSection(crsId:number,secId:number)
  {
    return this.http.delete<CourseSections[]>(this.api+'Courses/DeleteCourseSection?crsId='+crsId+'&secId='+secId);
  }

  // Delete lecture
  DeleteSectionLectures(courseId:number,lectId:number)
  {
      return this.http.delete<CourseLecture[]>(this.api+'Courses/DeleteSectionLecture?crsId='+courseId+'&lectId='+lectId) ;
  }

  // upload video
  UploadLectureVideo(lectId:number,video:FormData)
  {
    return this.http.put<CourseLecture[]>(this.api+'Courses/Upload/'+lectId,video)
  }

  // get courses by topic id
  getCoursesByTopicId(topId:number){
    return this.http.get(this.api+'Courses/GetCoursesByTopicId?id='+topId);
  }

  //get topic by topic id
  getTopicByTopicId(topId:number){
    return this.http.get(this.api+'Topics/GetTopicByTopicId?Topicd='+topId);
  }

  //get all courses
  GetAllCourses(){
    return this.http.get<Course[]>(this.api+'Courses/GetAllCourses');
  }

}
