"use strict";
class SeaCreature extends Animal {
    constructor(name, food, lowestDepth) {
        super(name, food);
        this._lowestDepth = lowestDepth;
    }
    get lowestDepth() {
        return this._lowestDepth;
    }
}
