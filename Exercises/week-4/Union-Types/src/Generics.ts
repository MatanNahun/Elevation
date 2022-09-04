

// let calc_num: string | number = "John";
// const new_num = calc_num + "Smith"; // No exception as in the previous line we initialized the type to be string



// function calc(num: string | number): string | number {
//     return num;
// }

// const calc_num = calc(4) ;
// const new_num = calc_num + 4; // ERROR: Supposed to be a 'number' type, but throws an error

// function calc<Type>(num: Type): Type {
//     return num;
// }

// const calc_num = calc(4);
// const new_num = calc_num + 4; // No error is thrown.

// class ImageType<DataType> {
//     data: DataType;
//     height: number;
//     width: number;
//     constructor(data: DataType, height: number, width: number) {
//         this.data = data;
//         this.height = height;
//         this.width = width
//     };
// }
// const imageType = new ImageType<string>("John", 480, 640);


// ==========================================================
// ex1:

type Type = string | string[] | number | number[]

function sum<Type>(val: Type): number{
    let sum: number = 0
    if (Array.isArray(val)){
        val.forEach(num => sum = sum + getValue(num) )
        return sum
    }
    else if (typeof val === "string"){
        sum = getValue(val)
        return sum

    }
    else if(typeof val === "number"){
        sum = val
        return sum

    }
    else{
        return 0
    }

 }


function getValue(val: string | number) : number{
    if (typeof val === "string"){
        const numOfVal: number = parseInt(val)
        return !isNaN(numOfVal) ? numOfVal : 0 //skip it if its not a string number
    }
    else{// its a number
        return val
    }

}

// console.log(sum("93"));
// console.log(sum("Tomer"));
// console.log(sum(9));
// console.log(sum(["test", 22, 55, "block", "9"]));
// console.log(sum([23, 433, 11]));

// ex2:

class NumberType<ArrGeneric>{
    numbers: ArrGeneric[];

    constructor(numbers: ArrGeneric[] ){
        this.numbers = numbers
    }

    addNumber(num: ArrGeneric) : void{
        this.numbers.push(num)

    }

    getValue(val: string | number) : number{
        if (typeof val === "string"){
            const numOfVal: number = parseInt(val)
            return !isNaN(numOfVal) ? numOfVal : 0 //skip it if its not a string number
        }
        else{// its a number
            return val
        }
    
    }

    sum(): number{
        let sum: number = 0
            this.numbers.forEach(elem => {
                if (typeof elem === 'string' || typeof elem === 'number') {
                    sum += this.getValue(elem)
                }
            });
            return sum;
        }
}

const numbers1: NumberType<string> = new NumberType<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: NumberType<number> = new NumberType<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);

