class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }

  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course);
    }
  }

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }
}

// const s1 = new Student("Ronda", 2017);
// console.log(s1.name); //prints "Ronda"

// s1.addCourse("Algebra II");
// console.log(s1.courses); //prints ["Algebra II"]

class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear);
    this.salary = salary;
    this.name = "Professor " + name;
    this.courses = {};
  }

  //override
  addCourse(course) {
    if (this.courses[course]) {
      return this.courses[course]++;
    }
    this.courses[course] = 1;
  }

  giveGrade(Student, courseName, grade) {
    Student.receiveGrade(courseName, grade);
  }
}

// // const s1 = new Student("Ronda", 2017);
// // const t1 = new Teacher("Cassandra", 2002, 40000);

// // t1.giveGrade(s1, "Algebra II", 82);
// // const firstGrade = s1.grades[0];

// // console.log(
// //   `${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`
// // );
// // //above should print "Ronda received an 82 in Algebra II"

// // const t1 = new Teacher("Cassandra", 2002, 40000);
// // console.log(t1.name);

// class TeachingAssistant extends Teacher {
//   constructor(name, startYear, salary) {
//     super(name, startYear, salary);
//   }
// }

// const ta1 = new TeachingAssistant("Brandon", 2014, 20000);
// console.log(ta1.toString());

// ================================================================

class Principal extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.teachers = [];
    this.students = [];
  }

  hireTeacher(Teacher) {
    this.teachers.push(Teacher);
    console.log(`${this.name} just hired ${Teacher.name}`);
  }

  recruitStudent(Student) {
    this.students.push(Student);
  }

  expelStudent(Student) {
    const filteredStudents = this.students.filter(
      (S) => S.name != Student.name
    );
    this.students = filteredStudents;
  }

  transferStudent(Student, OtherPrincipal) {
    this.expelStudent(Student);
    OtherPrincipal.recruitStudent(Student);
  }
}

const p1 = new Principal("Martin", 1991);
const p2 = new Principal("Martha", 1990);

const t1 = new Teacher("Cassandra", 2002, 40000);
const t2 = new Teacher("Kevin", 2006, 30000);

const s1 = new Student("Ronda", 2017);
const s2 = new Student("Byron", 2016);

//1 & 2
p1.hireTeacher(t1); //should print "Martin just hired Cassandra"
console.log(p1.teachers); //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2); //should print "Martin just hired Kevin"
console.log(p1.teachers); //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1);
p1.recruitStudent(s2);
console.log(p1.students); //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1);
console.log(p1.students); //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2);
console.log(p1.students); //should print Array(0) []
console.log(p2.students); //should print Array(1) [Student] - the student should be Byron
