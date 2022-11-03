"use strict";
class Animal {
    constructor(name, food) {
        this._name = name;
        this._food = food;
    }
    get food() {
        return this._food;
    }
    feed() {
        return `${this._name} has just ate!`;
    }
}
