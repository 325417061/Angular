import { Component,OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit{
  @Input()
  student?:Student;

  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

  saveNewStudent() {
    this.onSaveNewStudent.emit(this.student);
    //this.students.push(this.selectedStudent);
  }

  constructor() { }

  ngOnInit(): void {
    
  }
}
