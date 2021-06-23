import { Course } from "./Course";
import { CourseLecture } from "./course-lecture";

export class CourseSections {
    constructor(
        public sectionId: number,
        public title: string,
        public crsId: number,
        public course: Course,
        public courseLecture:CourseLecture[]
    ) { }

}
