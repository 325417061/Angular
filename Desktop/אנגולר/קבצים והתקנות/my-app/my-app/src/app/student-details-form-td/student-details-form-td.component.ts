import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student,yearOfStudy } from '../student.model';

@Component({
  selector: 'student-details-form-td',
  templateUrl: './student-details-form-td.component.html',
  styleUrls: ['./student-details-form-td.component.scss']
})
export class StudentDetailsFormTDComponent implements OnInit {
  @Input()
  student?: Student;

  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

  saveNewStudent() {
    this.onSaveNewStudent.emit(this.student);
    //this.students.push(this.selectedStudent);
  }

  @Output()
  onFirstFocus: EventEmitter<any> = new EventEmitter();
  firstFocusEmitted: boolean = false;

  inputFocus() {
    if (!this.firstFocusEmitted) {
      this.onFirstFocus.emit();
      this.firstFocusEmitted = true;
    }

  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
