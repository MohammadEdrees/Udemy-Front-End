import { StudentCourses } from "./student-courses";

export class Student {
    constructor(
        public stdId: number,
        public shoppingCard: any,
        public fname: string,
        public lname: string,
        public phone: string,
        public imagePath: string,
        public mail: string,
        public password: string,
        public address: string,
        public studentCourses: StudentCourses[]
    ) { }

}

