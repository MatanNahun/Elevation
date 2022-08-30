class Animal {
  constructor(name, numLegs, children) {
    this.name = name;
    this.numLegs = numLegs;
    this.children = [];
  }
  giveBirth(name) {
    this.children.push(name);
  }
}

const cat = new Animal("pancho", 5);

cat.giveBirth("Dolly");
console.log(cat.children); // should print an array with 1 item: ["Dolly"]

class Human {
  constructor(name, age, isFriedly) {
    this.name = name;
    this.age = age;
    this.isFriedly = isFriedly;
  }
}

const h1 = new Human("matan", 26, true);

console.log(h1.name, h1.age, h1.isFriedly);

class Vehicle {
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this._fuel = fuel;
  }

  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive");
    }
    this._speed = speed;
  }

  get speed() {
    return this._speed;
  }

  set fuel(fuel) {
    if (fuel < 0 || fuel > 150) {
      return console.log("fuel is not make sense");
    }
    this._fuel = fuel;
  }

  get fuel() {
    return this._fuel;
  }
}

const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; // at this point, we'll get the console log saying speed needs to be positive

console.log(c.speed); // prints undefined
