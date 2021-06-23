import { CourseSections } from "./course-sections";

export class CourseLecture {
    constructor(
        public lectureId: number,
        public title: string,
        public description: number,
        public duration: string,
        public link:string,
        public sectionId:number,
        public courseSection:CourseSections
    )
    { }

}
