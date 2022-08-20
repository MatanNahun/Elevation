console.log(3);
let username;

let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.splice(numbers.length - 1, 1);
console.log(numbers.splice(0, 0, 0));
console.log(numbers);

let p1 = {
  name: "matan",
  age: "26",
  city: "haifa",
};

let p2 = {
  name: "ziv",
  age: "22",
  city: "hadera",
};

if (p1.age == p2.age) {
  console.log("same age");
}

let companies = ["Tesla", "Amazon", "Google", "Microsoft"];
for (companyIndex in companies) {
  console.log(companies[companyIndex]);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (person in names) {
  people.push({ name: names[person], age: ages[person] });
}

console.log(people);

const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];

let idToRemove = null;
for (let post in posts) {
  if (posts[post].id == 2) {
    idToRemove = post;
  }
}

posts.splice(idToRemove, 1);
console.log(posts);
