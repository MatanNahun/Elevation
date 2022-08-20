// function foo(){
//     let sum = 0
//     for (let i = 1000; i < 2000; i++){
//         if (i % 203 === 0){
//             sum += getSecondDigit(i)
//         } else if (i % 497 === 0) {
//             sum += getLastDigit(i)
//         } else if (i % 293 === 0) {
//             sum += getLastDigit(i*13)
//         } 
//     }
//     return sum
// }

// function getSecondDigit(number){
//     return parseInt(number.toString().split("")[0])
// }

// function getLastDigit(number){
//     let numberLength = number.toString().length
//     return parseInt(number.toString().split("")[numberLength - 1])
// }

// foo()

// const counter = {
//     count: 0,
  
//     updateCounter: function () {
//       this.count += 1;
//     }
//   };
  
//   counter.updateCounter();
//   counter.updateCounter();
//   counter.updateCounter();
  
//   alert(counter.count);

//   const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log("Hi, I'm " + this.username)
//     }
//   }
  
//   person.introduce()

// const person = {
//     hungry: true,
  
//     feed: function () {
//       if (this.hungry) {
//         hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }  
  
//   person.feed() //should alert "I'm no longer hungry"

// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + this.amount + ' liters in ' + this.name);
//   };
  
//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };
  
//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);

// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };
  
//   const airplane = {
//     fuel: 0,
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };
  
//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());

// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function(number){
//         this.coinCount -= number
//     }
//   };

  
  
//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


// const revealSecret = function () {
//     return this.secret;
//   };
  
//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
//   };
  
//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };
  
//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };
  
//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);

const coffeeShop = {
    money: 100,
    beans: 40,
    drinkRequirements: {
        latte: {beanRequirement: 10, price: 5},
      americano: {beanRequirement: 5, price: 5},
      doubleShot: {beanRequirement: 15, price: 5},
      frenchPress: {beanRequirement: 12, price: 5}
    },
    buyDrink : function(drinkType){
        this.money += this.drinkRequirements[drinkType].price
        this.makeDrink(drinkType)

    },
    buyBeans :  function(numBeans) {
        this.money -= numBeans
        this.beans += numBeans

    },
    makeDrink: function (drinkType) {
        if (!( drinkType in this.drinkRequirements)){
            console.log( "Sorry, we don’t make ")
            return
        }
        if(this.beans > this.drinkRequirements[drinkType].beanRequirement){
            this.beans -= this.drinkRequirements[drinkType].beanRequirement
        }
        else{
            console.log("Sorry, we’re all out of beans!")
        }
      
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"