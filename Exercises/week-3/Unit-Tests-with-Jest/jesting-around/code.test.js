const calculateHyp = require("./code");
const add = require("./code");

const clearLowPriority = require("./code");

// test("add should return sum of a + b", () => {
//   let sum = add(1, 2);
//   expect(sum).toBe(3);
// });

// test("calculateHyp shuld return square root of the sum of the two arguments(pitaguras)", () => {
//   let squareRootOfSum = calculateHyp(3, 4);
//   expect(squareRootOfSum).toBe(5);
// });

// test("clearLowPriority remove all low prirority from the array", () => {
//   let tasks = [
//     { text: "blaBla", priority: "HIGH" },
//     { text: "FooFoo", priority: "LOW" },
//   ];
//   let filteredTasks = clearLowPriority(tasks);

//   filteredTasks.forEach((t) => {
//     expect(t.priority).toBe("HIGH");

//     expect(filteredTasks.length).toBe(1);
//     expect(filteredTasks[0].priority).toBe("HIGH");
//   });
// });

const PM = require("./code");

console.log(PM);

test("addPicture should add a picture URL to the pictureURLs array", function () {
  //sanity
  const picManager = new PM.PictureManager();
  expect(picManager.pictureURLs.length).toBe(0);

  picManager.addPicture("some_url");
  expect(picManager.pictureURLs.length).toBe(1); //test
  expect(picManager.pictureURLs).toContain("some_url"); //double check
});

test("removePicture should remove a picture URL from the pictureURLs array ", function () {
  const picManager = new PM.PictureManager();
  picManager.addPicture("some_url");
  expect(picManager.pictureURLs.length).toBe(1);

  picManager.removePicture("some_url");
  expect(picManager.pictureURLs.length).toBe(0);
});

// =====================================================================================
const Ex = require("./code");

test("should return true if n is even, false otherwise", () => {
  const ex1 = new Ex.Exercises();
  expect(ex1.isEven(2)).toBeTruthy();
});

test("should remove at least one element from the array ", () => {
  const ex1 = new Ex.Exercises();
  const arr = [1, 2, 3, 4];

  const arrLength = arr.length;
  const arrAfterRemove = ex1.removeAtLeastOne(arr);
  const lengthArrAfterRemove = arrAfterRemove.length;

  expect(lengthArrAfterRemove).toBeLessThan(arrLength);
});

test("should return a clean string without these symbols: !, #, ., , , ", () => {
  const ex1 = new Ex.Exercises();
  const stringWithSymbols = "hi!. !, #, ., , , ";
  const cleanString = ex1.simplify(stringWithSymbols);

  expect(cleanString).not.toContain("!");
  expect(cleanString).not.toContain("#");
  expect(cleanString).not.toContain(",");
  expect(cleanString).not.toContain(".");
  expect(cleanString).not.toContain("'");
});

test(` should verify that there is at least one boolean in the array, If there isn’t, it should return {error}
 If there are more trues than falses in the array, the method should return true
Otherwise, it should return false `, () => {
  const ex1 = new Ex.Exercises();
  const arrWithBool = [true, true, false, 4];
  const arrWithoutBool = [1, "hi"];
  const arrWithMoreTrue = [true, true, false, 4];
  const arrWithMoreFalse = [true, false, false, 4];

  expect(ex1.validate(arrWithBool)).toBeTruthy();
  //It should verify that there is at least one boolean in the array

  expect(ex1.validate(arrWithoutBool)).toStrictEqual({
    error: "Need at least one boolean",
  });
  // If there is no bool in the array it should return error

  expect(ex1.validate(arrWithMoreTrue)).toBeTruthy();
  // If there are more trues than falses in the array, the method should return true

  expect(ex1.validate(arrWithMoreFalse)).toBeFalsy();
  //Otherwise(if there is more falses or equal to trues), it should return false
});
