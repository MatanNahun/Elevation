// let p = $.get("/randomWord"); //notice that we don't use a callback in this case! We can, but this is what we're avoiding.
// console.log(p);

// $.get("/randomWord")
//   .then(function (word) {
//     return $.get(`/synonyms/${word}`);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function (synonyms) {
//     console.log(synonyms);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// ======================================================================

// ex1:

// $.get("https://random-word-api.herokuapp.com/word")
//   .then(function (data) {
//     return $.get(
//       `https://www.googleapis.com/books/v1/volumes?q=intitle:${data}`
//     );
//   })
//   .then(function (book) {
//     console.log(book.items[0].volumeInfo.title);
//     return book.items[0].volumeInfo.title;
//   });

//   ===================================================

$.get("https://random-word-api.herokuapp.com/word").then(function (word) {
  let randomBook = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
  );
  let randomGif = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=eWRfnmzb2sosodEzg1QHfLYHhdZ7edhH&limit=5`
  );
  Promise.all([randomBook, randomGif]).then(function (result) {
    $("body").append(`
    <h1> ${result[0].items[0].volumeInfo.title} </h1>
    <iframe src=${result[1].data[0].embed_url}></iframe>
    
    `);
    console.log(result);
  });
});
