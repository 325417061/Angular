import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent {
 
  
  students: Student[] = [
    new Student(1,"דני", "כהן","י","החידא 13","@g","050-1234567",87.5),
    new Student(2, "שירה","לוי","י״א","רחוב התלמיד 20, חיפה","@g","050-7654321",90.3,false, new Date('2023-12-15') ),
    new Student(3,"אבי","רון","י״ב", "רחוב הנוער 5, ירושלים","@g", "050-1122334",85.0),
   
  ];
  
  deleteStudent(student: Student){
    let itd=this.students.indexOf(student)
    this.students.splice(itd,1)

  }
  search(str:string){

  }
  // selectedstudent = new Student();
  selectedStudent?:Student;
  showDetails(StudentToShow:Student){
      this.selectedStudent=StudentToShow;
  }
  showNewStudentDetails() {
    this.selectedStudent = new Student();

  }

  // addNewStudentToList(studentToAdd: Student) {
  //   this.students.push(studentToAdd);
  //   this.selectedStudent = undefined;
  // }
  addNewStudentToList(studentToAdd: Student) {
    if (
      studentToAdd.firstName &&
      studentToAdd.lastName &&
      studentToAdd.grade &&
      studentToAdd.address &&
      studentToAdd.phoneNumber
    ) {
      this.students.push(studentToAdd);
      this.selectedStudent = undefined; // איפוס הערך הנבחר
    } else {
      alert('Please fill in all required fields.');
    }
  }
  
  btnClick(e: any) {
  }


      constructor(){}
    ngOnInit():void{}
}
