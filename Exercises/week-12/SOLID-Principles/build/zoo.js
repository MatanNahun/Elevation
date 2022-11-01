"use strict";
class Animal {
    constructor(type, name, food) {
        this.type = type;
        this.name = name;
        this.food = food;
    }
}
class Mammal extends Animal {
    constructor(type, name, food, durationOfPregnancy) {
        super(type, name, food);
        this._durationOfPregnancy = durationOfPregnancy;
    }
    get durationOfPregnancy() {
        return this._durationOfPregnancy;
    }
}
class SeaCreature extends Animal {
    constructor(type, name, food, lowestDepth) {
        super(type, name, food);
        this._lowestDepth = lowestDepth;
    }
    get lowestDepth() {
        return this._lowestDepth;
    }
}
class Bird extends Animal {
    constructor(type, name, food, wingSpan) {
        super(type, name, food);
        this._wingSpan = wingSpan;
    }
    get wingSpan() {
        return this._wingSpan;
    }
}
