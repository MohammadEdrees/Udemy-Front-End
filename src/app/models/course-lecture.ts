import { CourseSections } from "./course-sections";

export class CourseLecture {
    constructor(
        public lectureId: number,
        public title: string,
        public description: string,
        public duration: number,
        public link:string,
        public sectionId:number,
        public courseSection?:CourseSections
    )
    { }

}
