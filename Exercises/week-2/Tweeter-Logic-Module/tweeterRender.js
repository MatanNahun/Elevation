// console.log("hii");

const tweeterRender = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    for (const post of posts) {
      let postToAppend = `<div class="post post-text" id="${post.id}"> ${post.text} </div>`;
      // console.log(postToAppend);
      $("#posts").append(postToAppend);

      for (let comment of post.comments) {
        let commentToAppend = `<div class="comments" id="${comment.id}"> ${comment.text} </div>`;
        //   console.log(commentToAppend);
        $(`#${post.id}`).append(commentToAppend);
      }
    }
  };
  return { renderPosts: renderPosts };
};

// const _postsDummy = [
//   {
//     text: "First post!",
//     id: "p1",
//     comments: [
//       { id: "c1", text: "First comment on first post!" },
//       { id: "c2", text: "Second comment on first post!!" },
//       { id: "c3", text: "Third comment on first post!!!" },
//     ],
//   },
//   {
//     text: "Aw man, I wanted to be first",
//     id: "p2",
//     comments: [
//       {
//         id: "c4",
//         text: "Don't wory second poster, you'll be first one day.",
//       },
//       { id: "c5", text: "Yeah, believe in yourself!" },
//       { id: "c6", text: "Haha second place what a joke." },
//     ],
//   },
// ];

// renderPosts(_postsDummy);
