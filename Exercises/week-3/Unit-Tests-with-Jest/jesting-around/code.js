// const add = function (a, b) {
//   return a + b;
// };

// const { boolean } = require("yargs");

// module.exports = add;

// const calculateHyp = function (num1, num2) {
//   let sum = num1 * num1 + num2 * num2;
//   return Math.sqrt(sum);
// };

// module.exports = calculateHyp;

// const clearLowPriority = function (array) {
//   const filteredArray = [];
//   for (let object of array) {
//     if (object.priority == "HIGH") {
//       filteredArray.push(object);
//     }
//   }
//   return filteredArray;
// };

// module.exports = clearLowPriority;

class PictureManager {
  constructor() {
    this.pictureURLs = [];
  }

  addPicture(picURL) {
    this.pictureURLs.push(picURL);
  }

  removePicture(picURL) {
    this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1);
  }
}

class Exercises {
  constructor() {}

  //should return true if n is even, false otherwise
  isEven(n) {
    return n % 2 == 0 ? true : false;
  }

  //should remove at least one element from the array `arr`
  removeAtLeastOne(arr) {
    if (arr === []) {
      return false;
    }
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }

  //should return a clean string without these symbols: "!", "#", ".", ",", "'"
  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("");
  }

  validate(array) {
    if (array.some((a) => typeof a == "boolean")) {
      const trueArr = array.filter((a) => a === true);
      const falseArr = array.filter((a) => a === false);
      return trueArr.length > falseArr.length ? true : false;
    }
    return { error: "Need at least one boolean" };
  }
}
const ex = new Exercises();
console.log(ex.validate([false, true, false, true, 1, 1]));

module.exports = { PictureManager, Exercises };
