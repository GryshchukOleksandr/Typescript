class School {

  _areas: Array<any> = ["add area","remove area"]
  _lecturers: Array<any> = ["add lecturer", "remove lecturer"]; 


  addArea(area: string) {
    this._areas.push(area);
  }

   removeArea(area: Area) {
    const elementAreaIndex : any = this._areas.findIndex((areaItem)=> {area._name === areaItem._name});
  }

   addLecturer(lecturer: string) {
    this._lecturers.push(lecturer);
  }

   removeLecturer(lecturer: Lecturers) {
     const elementLecturerIndex:any = this._lecturers.findIndex((lecturerItem)=> {lecturer.name === lecturerItem.name});
  }

 
}

interface Lecturers {
  name: string, surname: string, position: string, company: string, experience: string, courses: number, contacts: string
}


class Area {
  
  _levels: Array<any> = ["add level", "remove level"];
  _name: string = ""

  get levels() {
    return this._levels
  }

  get mame() {
    return this._name
  }

  addLevel(level: string) {
    this._levels.push(level);
  }
  
  removeLevel(level: Level) {
     const elementLevelIndex: any = this._levels.findIndex((levelItem)=> {level.name === levelItem.name});
  }

  constructor(name: string) {
    this._name = name;
  }
}

class Level {
  groups: Array<any> = [];
  _name: string
  _program: string


  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
  }

  get name() {
    return this._name;
  }

  get program() {
    return this._program;
  }

  addGroup(group: string) {
    this.groups.push(group);
  }

   removeGroup(group: any) {
     const elementGroupIndex: any = this.groups.findIndex((groupItem)=> {group.name === groupItem.name});
  }
}

class Group {
  
  _area: any
  _status: any
  _students: Array<any> = []; // Modify the array so that it has a valid toSorted method*
  directionName: string
  levelName: string

  get area() {
    return this._area
  }

  get status() {
    return this._status
  }

   get students() {
    return this._students
  }

  set status(value) {
     this._status = value
  }

addStudent(student: string) {
  this._students.push(student)
  }

  removeStudent(student: any) {
    const elementStudentIndex = this._students.findIndex((studentItem)=> {student.name === studentItem.name});
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }


  showPerformance() {
    const sortedStudents: readonly string[] = this._students.toSorted((a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }
}


class Student {

  attendance: Array<unknown> = [];
  _firstName: string = ""
  _lastName: string = ""
  _birthYear: number
  _grades: Record<never, number> =  ["workName: mark"]; 
  _visits: Array<string> = ["lesson: present"]; 


  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }


  get fullName() {
    return `${this._lastName} ${this._firstName}`;
  }


  set fullName(value) {
    [this._lastName, this._firstName] = value.split(' ');
  }


  get age() {
    return new Date().getFullYear() - this._birthYear;
  }
  
  set grade(value: any) {
  this._grades = value
}
  
set visit(value: any) {
  this._visits = value
}

 markAttendance(present: unknown) {
    this.attendance.push(present);
  }


  getPerformanceRating() {
    const gradeValues: any = Object.values(this._grades);


    if (!gradeValues.length) return 0;


    const averageGrade = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage = (this._visits.filter((present) => present).length / this._visits.length) * 100;


    return (averageGrade + attendancePercentage) / 2;
  }
}

 
