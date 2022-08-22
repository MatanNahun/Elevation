// console.log("hi");

// header = $("#h1");

// // console.log(header);

// console.log($);

// const myQuery = function (selector) {
//   if (selector[0] == "#") {
//     const elementId = selector.split("#")[1]; //will return everything after the # in selector
//     return document.getElementById(elementId);
//   }
// };

// console.log(myQuery("#h1"));

// $("h4").css("color", "red");

// $("h1").css("color", "blue");
// $(".red-div").css("color", "red");

// $("li:first-child").css("background-color", "green");
// $("li:last-child").css("background-color", "pink");
// $("#brown-div").css("background-color", "brown");

// $("#b1").addClass("box1");
// $("#b2").addClass("box1");

// $("#my-input").val("Terabyte");

// const color = $("#div").data().color;
// console.log(color); //prints #2980b9

// const barcode = $("#check5").data().barcode;
// console.log(barcode);

// const expirationDate = $("#check5").data().expirationdate;
// console.log(expirationDate);

// $("h1").on("click", function () {
//   alert("clicked!");
// });

// $("#check6").hover(function () {
//   $("#check6").css("background-color", "blue");
// });

// $("button").on("click", function () {
//   const alertMwssage = $("#my-input7").val();
//   alert(alertMwssage);
// });

// $(".box").hover(function () {
//   $(this).css("background-color", "blue");
// });

// // const aDynamicDiv = "<div class='mine'>Oh yes</div>";
// // const elem = $(aDynamicDiv);
// // $("body").append(elem);

// $(".fruits").append('<p class="red">Raspberry</p>');
// $(".fruits").append('<p class="brown">Kiwi</p>');

// const newDiv = "<div> feed me more <div>";
// $(".feedme").append($(newDiv));

// $(".feedme").on("click", function () {
//   let divCopy = `<div class=feedme> ${$(this).text()} <div>`; //use template literals and $(this)

//   $("body").append(divCopy);
// });

// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" },
// ];

// // for (let index in names) {
// //   const newDiv = `<div> ${names[index].first} - ${names[index].last}  <div>`;
// //   console.log(newDiv);
// //   $("body").append(newDiv);
// // }

// $("#h1").remove();

// $("p.brown").remove();

// $("#check11").hover(function () {
//   $("#check11").remove();
// });

// const append = function () {
//   const newDiv = `<div class="blog"> thats a new one </div>`;
//   console.log("hi");
//   $("#blogs").append(newDiv);
// };

// $("#blogs").on("click", function () {
//   $("#blogs .blog").text("blargh");
// });

// const addDiv = function () {
//   $("body").append(`<div class="box"></div>`);
// };

// $("button").on("click", function () {
//   addDiv();
// });

// $("body").on("click", ".box", function () {
//   alert("hi");
// });

// =============================================

// Exercise 1:

$("#addHuman").on("click", function () {
  console.log("hi");
  const inputValue = $("#my-input").val();
  console.log(inputValue);

  const newDiv = `<li class="human"> ${inputValue} </li>`;
  $("#ulElement").append(newDiv);
});

$("#ulElement").on("click", ".human", function () {
  $(this).remove();
});
