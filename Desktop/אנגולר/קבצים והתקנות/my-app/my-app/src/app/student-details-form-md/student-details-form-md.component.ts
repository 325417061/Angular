import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { yearOfStudy, Student } from '../student.model';

@Component({
  selector: 'student-details-form-md',
  templateUrl: './student-details-form-md.component.html',
  styleUrls: ['./student-details-form-md.component.scss']
})
export class StudentDetailsFormMDComponent implements OnInit {
  cours = ['Math', 'Science', 'History'];  // דוגמה לקורסים


  year = yearOfStudy;

  private _student?: Student;

  public get student(): Student | undefined {
    return this._student;
  }

  @Input()
  public set student(value: Student | undefined) {
    this._student = value;
    if (this.student != undefined) {
      this.studentForm = new FormGroup({
        "id": new FormControl(this.student.id),
        "firstName": new FormControl(this.student.firstName, [Validators.required, Validators.minLength(3)]),
        "lastName": new FormControl(this.student.lastName, [Validators.required, Validators.minLength(3)]),
        "averageGrade": new FormControl(this.student.averageGrade, Validators.required),
        "phoneNumber": new FormControl(this.student.phoneNumber, Validators.required),
        "address": new FormControl(this.student.address, Validators.required),
        "leaveDate": new FormControl(this.student.leaveDate),
        "email": new FormControl(this.student.email, Validators.required),
        "isActive": new FormControl(this.student.isActive, Validators.required),
        "yearOfStudy": new FormControl(this.student.yearOfStudy),
        "cours": new FormControl(this.student?.cours || '', Validators.required)

      });
    }
  }

  @Output()
  onSaveStudent: EventEmitter<Student> = new EventEmitter();

  studentForm: FormGroup = new FormGroup({});

  saveNewStudent() {
    console.log("454545454545");
    console.log("Form Status:", this.studentForm.status); // VALID או INVALID
    console.log("Form Errors:", this.studentForm.errors); // שגיאות כלליות ברמת הטופס (אם יש)
    console.log("Control Errors:", this.studentForm.controls); // מצב השדות


    console.log("Student Data on Save:", this.studentForm.value);


    console.log("Form Validity:", this.studentForm.valid); // true או false
    console.log("All Controls:", this.studentForm.controls);
    Object.keys(this.studentForm.controls).forEach(key => {
      const control = this.studentForm.get(key);
      console.log(`${key} - Value:`, control?.value, "Errors:", control?.errors);
    });


    if (this.studentForm.valid) {
      const studentData = { ...this.studentForm.value, id: this.student?.id || 0 };
      console.log("Emitting student data to parent:", studentData);
      this.onSaveStudent.emit(studentData);

      console.log("Form is valid, sending data...");
    } else {
      console.log("Form is invalid, fix the errors.");
    }
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
  logFormValues() {
    console.log("Form Values:", this.studentForm.value);
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    console.log("oninit", this.studentForm.value);

    this.studentForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      cours: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      averageGrade: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      isActive: [false],
      leaveDate: [null],  // הגעת לכאן לא צריך להוסיף Validators.required
      yearOfStudy: ['', Validators.required],
    });

  }

}
