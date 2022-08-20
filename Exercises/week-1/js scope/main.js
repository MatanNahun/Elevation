// console.log("hi")
// const bag = ["flashlight", "medicine"]
// const moreItems = ["tent", "water bottle", "knife", "rope"]

// if(bag.length < 3){
//   const nextItem = moreItems[0]
//   bag.push(nextItem)
// }

// console.log(bag)
// console.log("Added " + nextItem)

// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }

// console.log("Damn, you see this gal? She ran " + distance + " miles")

// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)
// }

// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)

// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()

// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

// const isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }

// greet() //works without a problem
// greetExpression() //throws an error

// function greet(){
//   console.log("Hello there, from the wild, wild West")
// }

// const greetExpression = function(){
//   console.log("Uh oh")
// }


// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log("i like " + food)
//     }
//   }

//   person.speak("chees")

  const isEven = function(number ){
    return number%2==0

  }

 console.log( isEven(2))

 const printOdds = function (arr){
    for ( let num of arr){
        if (!isEven(num)){
            console.log(num)
        }
    }
 }
 let arr = [1,2,3]

 console.log( printOdds(arr))

 let calculator = {
    add: function(x,y){
        return x+y
    },
    subtract: function(x,y){
        return x-y
    }
 }

 const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42


const increaseByNameLength = function(money, name){
    money = money * name.length
}