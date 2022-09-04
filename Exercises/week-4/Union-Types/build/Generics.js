"use strict";
// let calc_num: string | number = "John";
// const new_num = calc_num + "Smith"; // No exception as in the previous line we initialized the type to be string
function sum(val) {
    let sum = 0;
    if (Array.isArray(val)) {
        val.forEach(num => sum = sum + getValue(num));
        return sum;
    }
    else if (typeof val === "string") {
        sum = getValue(val);
        return sum;
    }
    else if (typeof val === "number") {
        sum = val;
        return sum;
    }
    else {
        return 0;
    }
}
function getValue(val) {
    if (typeof val === "string") {
        const numOfVal = parseInt(val);
        return !isNaN(numOfVal) ? numOfVal : 0; //skip it if its not a string number
    }
    else { // its a number
        return val;
    }
}
// console.log(sum("93"));
// console.log(sum("Tomer"));
// console.log(sum(9));
// console.log(sum(["test", 22, 55, "block", "9"]));
// console.log(sum([23, 433, 11]));
// ex2:
class NumberType {
    constructor(numbers) {
        this.numbers = numbers;
    }
    addNumber(num) {
        this.numbers.push(num);
    }
    getValue(val) {
        if (typeof val === "string") {
            const numOfVal = parseInt(val);
            return !isNaN(numOfVal) ? numOfVal : 0; //skip it if its not a string number
        }
        else { // its a number
            return val;
        }
    }
    sum() {
        let sum = 0;
        this.numbers.forEach(elem => {
            if (typeof elem === 'string' || typeof elem === 'number') {
                sum += this.getValue(elem);
            }
        });
        return sum;
    }
}
const numbers1 = new NumberType(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");
const numbers2 = new NumberType([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);
console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
