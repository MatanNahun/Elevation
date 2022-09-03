const email1 = "cat@meow.com";
const email2 = "bad1npuT!@gmail.com";
const email3 = "meow@gmail.net";

const emailValidator = function (str) {
  const regex = /.com$/;
  const isValidEmail = regex.test(str);
  return isValidEmail;
  /**
   * returns true if email prefix and domain is made strictly out of letters , the email must end in .com
   * HINT : doesnt have to be a big regex expression use the methods from RegExp
   */
};

console.log(emailValidator(email1)); //return true
console.log(emailValidator(email2)); //return true
console.log(emailValidator(email3)); //return false
