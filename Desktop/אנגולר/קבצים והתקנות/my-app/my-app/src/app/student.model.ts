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
  cours?: string = '';
  yearOfStudy?:yearOfStudy;
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
    leaveDate?: Date, // אופציונלי
    cours: string = ''

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
    this.cours = cours;
  }

}
  
export enum yearOfStudy {
  A = 1,
  B = 2,
  C = 3
}
