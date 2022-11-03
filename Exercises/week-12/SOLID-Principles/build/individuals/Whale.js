"use strict";
class Whale extends SeaCreature {
    constructor(name) {
        super(name, new Food("planktons", 2000), 100);
    }
}
