const posts = [
  {
    name: "Uncle Jerome",
    text: "text1",
  },
  {
    name: "BFF Charlene",
    text: "text2",
  },
  {
    name: "Old High School Teacher",
    text: "text3",
  },
];

const render = function () {
  for (let post of posts) {
    console.log(post);
    const newDiv = `<div> ${post.name}: ${post.text} </div>`;
    $("#postList").append($(newDiv));
  }
};

$("#postButton").on("click", function () {
  console.log("hi");
  const nameInput = $("#name").val();
  const textInput = $("#text").val();
  posts.push({ name: `${nameInput}`, text: `${textInput}` });
  $("#postList").empty();
  $("#name").val("");
  $("#text").val("");

  render();
});

render();
