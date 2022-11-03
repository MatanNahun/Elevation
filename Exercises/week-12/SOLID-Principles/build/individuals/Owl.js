"use strict";
class Owl extends Bird {
    constructor(name) {
        super(name, new Food("worms", 100), 3);
    }
}
