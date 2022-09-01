var validator = require("validator");
const { faker } = require("@faker-js/faker");

// //Ex. 1
// //Check whether "shoobert@dylan" is a valid email (should be false)
// console.log(validator.isEmail("shoobert@dylan"));

// //Ex. 2
// //Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
// console.log(validator.isMobilePhone("786-329-9958", "en-US"));

// //Ex. 3
// //Use the following blacklist
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"];

// //Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!";
// //Ultimately, it should print "im so excited"
// let newText = validator.blacklist(text, blacklist);
// console.log(newText);

const makeHuman = function (number) {
  const humans = [number];
  for (let i = 0; i < number; i++) {
    let human = {
      name: faker.name.firstName(),
      imageURL: faker.image.avatar(),
      company: faker.company.name(),
    };
    humans.push(human);
    console.log(human);
  }
  console.log(humans);
};

makeHuman(2);
