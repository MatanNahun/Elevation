"use strict";
class Bird extends Animal {
    constructor(name, food, wingSpan) {
        super(name, food);
        this._wingSpan = wingSpan;
    }
    get wingSpan() {
        return this._wingSpan;
    }
}
