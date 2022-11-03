"use strict";
class Food {
    constructor(type, dailyQuantityGrams) {
        this._type = type;
        this._dailyQuantityGrams = dailyQuantityGrams;
    }
    get type() {
        return this._type;
    }
    get dailyQuantityGrams() {
        return this._dailyQuantityGrams;
    }
    set dailyQuantityGrams(amount) {
        this._dailyQuantityGrams = amount;
    }
}
