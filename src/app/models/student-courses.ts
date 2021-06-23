import { Course } from "./Course";
import { Student } from "./Student";

export class StudentCourses {
    constructor(
    public crsId: number,
    public stdId: number,
    public grade: string,
    public certificate: string,
    public course:Course,
    public student :Student
    )
    {}
}
