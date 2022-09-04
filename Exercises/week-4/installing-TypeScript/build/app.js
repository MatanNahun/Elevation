"use strict";
// console.log("hi")
// let hasDog: boolean = true; // Assigning type 'boolean
// console.log(hasDog)
// let ids: number[] = [1, 2, 3, 4, 5]; // array of type 'number'
// let names: string[] = ['Danny', 'Anna', 'Bazza']; // array of type 'string'
// let options: boolean[] = [true, false, false]; // array of type 'boolean'
// ids.push(6); // OK
// let person: {
//     name: string;
//     location: string;
//     isProgrammer: boolean;
//   };
//   person = {
//     name: 'John',
//     location: 'Israel',
//     isProgrammer: true,
//   };
// //   person.isProgrammer = 'Yes'; // ERROR, must be of 'boolean' type
// //   person = {
// //     name: 'John',
// //     location: 'Israel',
// //   }; 
//   // ERROR, missing 'isProgrammer' property
//   // Calculate the circumference of a circle given its diameter
// function circumference(diameter: number): string {
//     return 'The circumference is ' + Math.PI * diameter;
//   }
//   console.log(circumference(10)); // => "The circumference is 31.41592653589793"
//   class Person {
//     name: string;
//     isProgrammer: boolean;
//     children: number;
//     constructor(n: string, c: boolean, p: number) {
//       this.name = n;
//       this.isProgrammer = c;
//       this.children = p;
//     }
//     sayHello() {
//       return `Hi, my name is ${this.name} and I have ${this.children} children`;
//     }
//   }
//   const person1 = new Person('John', false, 2);
// //   const person2 = new Person('Michael', 'yes', 4); // ERROR, Argument of type 'string' is not assignable to parameter of type 'boolean'.
//   console.log(person1.sayHello()); // => Hi, my name is John and I have 1 children
//   ===============================================================================================
// Exercises -  types:
// ex1:
// function sum(arr: number[]) :number {
//     let sumUP: number = 0
//     arr.forEach(num => sumUP = sumUP + num )
//     return sumUP
// }
// function isEven(num: number) : boolean{
//     return num % 2 === 0 ? true : false
// } 
// const numArray1: number[] = [4,7,44,5,234];
// const numArray2: number[] = [65,33,5,2532,32,6];
// const numArray3: number[] = [54,6,656,4];
// console.log(`${numArray1} | ${sum(numArray1)} | ${isEven(sum(numArray1))}`);
// console.log(`${numArray2} | ${sum(numArray2)} | ${isEven(sum(numArray2))}`);
// console.log(`${numArray3} | ${sum(numArray3)} | ${isEven(sum(numArray3))}`)
//ex2:
class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getGradeAvg() {
        let sumGrades = 0;
        this.grades.forEach(grade => sumGrades += grade);
        let average = sumGrades / (this.grades.length);
        return average;
    }
}
const student1 = new Student("matan", [76, 90, 87, 89]);
const student2 = new Student("yaniv", [46, 20]);
const student3 = new Student("mal", [96, 90]);
const studentArr = [student1, student2, student3];
studentArr.forEach(student => {
    console.log(`${student.name}: ${student.getGradeAvg()}`);
});
