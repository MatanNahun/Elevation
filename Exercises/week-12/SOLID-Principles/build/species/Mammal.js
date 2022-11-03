"use strict";
class Mammal extends Animal {
    constructor(name, food, durationOfPregnancy) {
        super(name, food);
        this._durationOfPregnancy = durationOfPregnancy;
    }
    get durationOfPregnancy() {
        return this._durationOfPregnancy;
    }
}
