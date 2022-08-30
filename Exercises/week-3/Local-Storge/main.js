// console.log("hi");
// localStorage.setItem("name", "Matan");

// const getFromConsole = localStorage.getItem("name");
// console.log(getFromConsole);

// localStorage.removeItem("name");

// localStorage.personalData = JSON.stringify({
//   averageTimeOnSite: { unit: "hr", amt: 9 },
//   probabilityOfFriends: 0.02,
//   commonKeywords: ["salsa for one", "1 vs. none Chess"],
// });

// let userStuff = JSON.parse(localStorage.personalData);

// console.log(userStuff.probabilityOfFriends); //prints 0.02

// let userStorage = {
//   darkMode: true,
//   showSideNav: false,
//   defaultResultCount: 9,
//   latestMarks: {
//     sectionA: 92,
//     sectionB: 11,
//   },
//   cart: [
//     { id: 3112, count: 2 },
//     { id: 812, count: 16 },
//   ],
// };

// localStorage.User = JSON.stringify(userStorage);

// let UserParse = JSON.parse(localStorage.User || "[]");
// console.log(UserParse.cart[1].count);

// ====================================================================

const wisdom = [];
let a = -1;
const nextId = function () {
  a += 1;
  return a;
};

/// appending the input to the page and put them in the local storage as well
$("#button").on("click", function () {
  let input = $("input").val();
  a = nextId();

  wisdom.push({ text: input, id: a });

  $("body").append(`<li id="${a}" >${input}</li>`);
  $("input").val("");

  if (wisdom.length % 2 == 0) {
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
  }
});

/// rendering the local storage to the page after you refresh the page

let wisdomParse = JSON.parse(localStorage.wisdom || "[]");
console.log(wisdomParse);
for (let object of wisdomParse) {
  $("body").append(`<li id="${object.id}">${object.text}  <span>x</span></li>`);
}

$("#button-clear").on("click", function () {
  localStorage.clear();
});

/// remove li from the local storage

$("body").on("click", "span", function () {
  console.log($(this).closest("li").attr("id"));
  const idToRemoveFromWisdom = $(this).closest("li").attr("id");
  for (let object of wisdomParse) {
    if (object.id == idToRemoveFromWisdom) {
      console.log(object.id);

      const filterWisdom = wisdomParse.filter(
        (w) => w.id != idToRemoveFromWisdom
      );
      console.log(filterWisdom);

      localStorage.setItem("wisdom", JSON.stringify(filterWisdom));
    }
  }
});
