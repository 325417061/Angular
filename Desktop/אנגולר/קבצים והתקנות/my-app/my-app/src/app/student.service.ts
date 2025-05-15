import { Injectable } from '@angular/core';
import { yearOfStudy, Student } from './student.model';

const STUDENTS = [
    new Student(1, " דני", "כהן", "י", "החידא 13", "@g", "050-1234567", 87.5),
    new Student(2, "שירה", "לוי", "י״א", "רחוב התלמיד 20, חיפה", "@g", "050-7654321", 90.3, false, new Date('2023-12-15')),
    new Student(3, "אבי", "רון", "י״ב", "רחוב הנוער 5, ירושלים", "@g", "050-1122334", 85.0),

];

@Injectable()
export class StudentService {
    
    getStudents(): Student[] {
        return STUDENTS;
    }
    getStudentsSlowly(): Promise<Student[]> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(STUDENTS);
            }, 3000);
        })
    }




}