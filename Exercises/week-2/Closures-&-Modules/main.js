// console.log("hi");
// const foo = function () {
//   const x = 1;

//   const bar = function () {
//     console.log(x); //notice this inner function using the outer function's variable
//   };

//   return bar;
// };

// const baz = foo(); //out here, x doesn't exist
// baz(); //but when we invoke baz, we're printing x!

// const setCounter = function (num) {
//   let counter = 0;

//   const count = function () {
//     counter += num;
//     console.log(counter);
//   };

//   return count;
// };

// const increment = setCounter(2);
// increment();
// increment();

// const Family = function () {
//   let members = [];

//   const birth = function (name) {
//     members.push(name);
//     console.log(members);
//   };
//   return birth;
// };

// const giveBirth = Family();
// giveBirth();
// giveBirth();

// const mathOperations = function () {
//   const add = function (x, y) {
//     return x + y;
//   };

//   const subtract = function (x, y) {
//     return x - y;
//   };

//   const multiply = function (x, y) {
//     return x * y;
//   };

//   const divide = function (x, y) {
//     return x / y;
//   };

//   return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide,
//   };
// };

// const m = mathOperations();

// m.add(3, 4);
// console.log(m.add(13, 29));

// console.log(m.mult(1.75, 24));

// console.log(m.mult(7, m.div(36, 6)));

// const UsersModule = function () {
//   const _users = ["Aaron", "Avi"];

//   const addUser = function (user) {
//     _users.push(user);
//   };

//   const listUsers = function () {
//     for (let user of _users) {
//       console.log(user);
//     }
//   };

//   return {
//     addUser: addUser,
//     listUsers: listUsers,
//   };
// };

// const usersModule = UsersModule();

// usersModule.addUser("Narkis");
// usersModule.addUser("Matan");
// usersModule.addUser("Tom");
// usersModule.listUsers();

// console.log(userModule.users);

// =============================

// Exercise 1:

// const StringFormatter = function () {
//   const capitalizeFirst = function (string) {
//     return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
//   };

//   const skewerCase = function (string) {
//     return string.split(" ").join("-");
//   };

//   return {
//     capitalizeFirst: capitalizeFirst,
//     skewerCase: skewerCase,
//   };
// };

// const formatter = StringFormatter();

// console.log(formatter.capitalizeFirst("dorothy")); //should print Dorothy
// console.log(formatter.skewerCase("blue box")); //should print blue-box

// Exercise 2:

// const Bank = function () {
//   let _money = 500;

//   const depositCash = function (cash) {
//     return (_money += cash);
//   };

//   const checkBalance = function () {
//     console.log(_money);
//   };
//   return {
//     deposit: depositCash,
//     showBalance: checkBalance,
//   };
// };

// const bank = Bank();
// bank.deposit(200);
// bank.deposit(250);
// bank.showBalance(); //should print 950

// Exercise 3:

// const SongsManager = function () {
//   const _songs = {};
//   const _youtubeBase = "https://www.youtube.com/watch?v=";

//   const _extractIdentifier = (url) => url.split("").splice(32).join("");
//   const _getUrl = (identifier) => _youtubeBase + identifier;

//   const addSong = function (name, url) {
//     return (_songs[name] = _extractIdentifier(url));
//   };

//   const getSong = function (name) {
//     console.log(_getUrl(_songs[name]));
//   };

//   return {
//     addSong: addSong,
//     getSong: getSong,
//   };
// };

// const songsManager = SongsManager();
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

// songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
