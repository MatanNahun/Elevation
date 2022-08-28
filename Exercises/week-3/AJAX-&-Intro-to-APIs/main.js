// console.log("hi");
// let a = $("h1");
// console.log(a);

// $.get(
//   "https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind",
//   function (result) {
//     console.log(result.items[0].volumeInfo.description);
//   }
// );

// let person = { name: "Kyle", age: 37 };
// let expectedYearsLeft = 120 - person.age;

// console.log(`${person.name} has ${expectedYearsLeft} years to live`); //prints Kyle has 83 years to live

// const useData = function (data) {
//   console.log(data);
// };

// $.ajax({
//   method: "GET",
//   url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
//   success: useData,
// });
// ==========================================================================
// const fetch = function (queryType, queryValue) {
//   $.ajax({
//     method: "GET",
//     url: ` https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue} `,
//     success: function (data) {
//       data.items.forEach((element) =>
//         console.log(
//           element.volumeInfo.title,
//           element.volumeInfo.authors,
//           element.volumeInfo.industryIdentifiers
//         )
//       );
//     },
//     error: function (xhr, text, error) {
//       console.log(text);
//     },
//   });
// };

// =========================================================================

// const fetch = function () {
//   $.ajax({
//     method: "GET",
//     url: "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=eWRfnmzb2sosodEzg1QHfLYHhdZ7edhH&limit=5",
//     success: function (data) {
//       console.log(data.data[0].embed_url);
//       $("iframe").attr("src", data.data[0].embed_url);
//     },
//     error: function (xhr, text, error) {
//       console.log(text);
//     },
//   });
// };

// $("#button").on("click", function () {
//   fetch();
// });

// =======================================================================================
const fetch = function () {
  const input = $("#search").val();
  $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=eWRfnmzb2sosodEzg1QHfLYHhdZ7edhH&limit=5`,
    success: function (data) {
      $("iframe").attr("src", data.data[0].embed_url);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

$("#button").on("click", function () {
  fetch();
});
