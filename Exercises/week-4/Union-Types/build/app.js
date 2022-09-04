"use strict";
// console.log("hi")
const value = true;
function doX(anyValue) {
    return anyValue == 8;
}
console.log(doX(value));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
function print_numbers(phoneNumber) {
    if (Array.isArray(phoneNumber)) {
        console.log("Array : " + phoneNumber);
    }
    else if (typeof (phoneNumber) === "string") {
        console.log("string: " + phoneNumber);
    }
    else if (typeof (phoneNumber) === "number") {
        console.log("number: " + phoneNumber);
    }
}
print_numbers(972528684411);
print_numbers([972528684411, 9725242223]);
print_numbers("052863423243");
print_numbers(["052343434286", "0547734343"]);
