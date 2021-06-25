import { Instructor } from "./Instructor"; 
import { StudentCourses } from "./student-courses";

export class Course {
    constructor(
        public crsId: number,
        public title: string,
        public description: string,
        public duration: string,
        public paymentMethod: number,
        public languge: string,
        public levels: string,
        public subtitle: string,
        public author: string,
        public imagePath: string,
        public rate: number,
        public state: string,
        public topId: number,
        public top :any,
        public studentCourses :StudentCourses[],
        public courseVideos :any,
        public cardId :number,
        public shoppingCard :any,
        public instructor:Instructor 
    ) { }

}


  


