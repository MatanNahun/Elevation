const firstURL = "www.workingurl.com";
const secondURL = "iamabadurl.com";
const thirdURL = "www.doireallywork.net";

const urlValidator = function (str) {
  const regex = /^(www)(.*)(.com)$/;
  const isValidURL = regex.test(str);
  return isValidURL;
  /**
   * returns true if URL starts with www. , the URL must end in .com
   * HINT : doesnt have to be a big regex expression use the methods from RegExp
   */
};

console.log(urlValidator(firstURL)); //return true
console.log(urlValidator(secondURL)); //return false
console.log(urlValidator(thirdURL)); //return false
