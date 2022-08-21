// let users = [];

// const getData = function (callback) {
//   setTimeout(function () {
//     users = [{ name: "Rick" }, { name: "Morty" }];
//     console.log("Got users");
//     callback();
//   }, 3000);
// };

// const displayData = function () {
//   console.log("Going to display: " + users);
//   for (user of users) {
//     console.log(user.name);
//   }
// };

// getData(displayData);

// const timer = function () {
//   console.log(new Date());
// };

// setInterval(function () {
//     console.log(new Date())}, 1000)

// const getFormalTitle = (title, name) => {
//   return title + " " + name;
// };

// getFormalTitle("Madamme", "Lellouche");

// console.log(getFormalTitle("Madamme", "Lellouche"));

// const suspenseBuilder = {
//   name: "El Mysterio",
//   displayName: function () {
//     console.log("You are going to see the name in 3 seconds...");

//     setTimeout(function () {
//       //normal function
//       console.log("The name is: " + this.name);
//     }, 3000);
//   },
// };

// suspenseBuilder.displayName();
// ===========================================
// Exercises:

// Exercise 1 - Callbacks:

//

// Exercise 2 - Callbacks:

// const returnTime = function (time) {
//   alert("The current time is: " + time);
// };

// const getTime = (func) => {
//   const time = new Date();
//   return func(time);
// };

// getTime(returnTime);

// Exercise 3 - Callbacks:
// const logData = function (data) {
//   console.log(data);
// };

// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// displayData(alert, logData, "I like to party");

// Exercise 4 - Arrow Functions:
// const sumThreeArg = (num1, num2, num3) => num1 + num2 + num2;
// console.log(sumThreeArg(1, 1, 1));

// Exercise 5 - Arrow Functions:
// const capitalize = (string) => {
//   return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
// };

// console.log(capitalize("bOb")); // returns Bob
// console.log(capitalize("TAYLOR")); // returns Taylor
// console.log(capitalize("feliSHIA")); // returns Felishia

const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};
