export class Student {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  grade: string = '';
  email: string = '';
  phoneNumber: string = '';
  address: string = '';
  averageGrade: number = 0;
  isActive: boolean = true; // ברירת מחדל: פעיל
  leaveDate?: Date; // תאריך עזיבה (אופציונלי)

  constructor(
    id: number = 0,
    firstName: string = '',
    lastName: string = '',
    grade: string = '',
    email: string = '',
    phoneNumber: string = '',
    address: string = '',
    averageGrade: number = 0,
    isActive: boolean = true, // ברירת מחדל: פעיל
    leaveDate?: Date // אופציונלי
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.averageGrade = averageGrade;
    this.isActive = isActive;
    this.leaveDate = leaveDate;
  }
}
