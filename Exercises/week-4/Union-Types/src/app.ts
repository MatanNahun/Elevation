// console.log("hi")

// type ID = number | string; // Type alias 'ID'

// let returnedId: ID = 8; // OK
// let newId: ID = '9'; // OK

type val= string | number | boolean;

const value = true

function doX(anyValue: val) : val{
    return anyValue == 8
}

console.log(doX(value))


enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }

//   ================================================

// exercises:

// ex1:
// function concat(strArray: string | string[], isPrint: boolean | number): void {
//     if (Array.isArray(strArray)) {
//         strArray = strArray.join(' ');
//     } else if (typeof strArray !== 'string') {
//         console.log(`Function doesn't support type ${typeof strArray}`);
//     }

//     if ((typeof isPrint === 'boolean' && isPrint) || (typeof isPrint === 'number' && isPrint === 1)) {
//         console.log(strArray);
//     } else if ((typeof isPrint !== 'boolean' && !isPrint)) {
//         console.log(`Function doesn't support 'isPrinted' with value '${isPrint}'`);
//     }
// }

// concat("Tomer", false);
// concat("Tomer", 2);
// concat(["Tomer", "Sagi"], 1);
// concat(["Tomer", "Sagi"], 0);
// concat(["Michael", "Jordan", "is", "the", "King"], true);

// ex2:

type phonenumberType = string | string[] | number | number[]

function print_numbers(phoneNumber: phonenumberType) : void{
    if (Array.isArray(phoneNumber)){
        console.log("Array : " + phoneNumber)
    }
    else if (typeof(phoneNumber) === "string"){
        console.log("string: " + phoneNumber)
    }
    else if (typeof(phoneNumber) === "number"){
        console.log("number: " + phoneNumber)
    }
}

print_numbers(972528684411);
print_numbers([972528684411, 9725242223]);
print_numbers("052863423243");
print_numbers(["052343434286", "0547734343"]);