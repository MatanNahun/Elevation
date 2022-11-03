"use strict";
class Zoo {
    constructor() {
        this._supply = {};
        this._supplyToOrder = {
            meat: 60000,
            planktons: 2000000000,
            algae: 33,
            seeds: 1200,
            worms: 800,
        };
        this._animals = [];
        this._supply = {
            meat: new Food("meat", this._supplyToOrder.meat),
            planktons: new Food("plankton", this._supplyToOrder.planktons),
            algae: new Food("algae", this._supplyToOrder.algae),
            seeds: new Food("seeds", this._supplyToOrder.seeds),
            worms: new Food("worms", this._supplyToOrder.worms),
        };
    }
    addAnimalToZoo(animal) {
        this._animals.push(animal);
    }
    removeFromSupply(food) {
        this._supply[food.type].dailyQuantityGrams -= food.dailyQuantityGrams;
    }
    dailyfeed() {
        this._animals.forEach((animal) => {
            let animalFood = animal.food;
            this.refillIfNeeded(animalFood);
            this.removeFromSupply(animalFood);
            console.log(animal.feed());
        });
    }
    refillIfNeeded(animalFood) {
        if (this._supply[animalFood.type].dailyQuantityGrams <
            animalFood.dailyQuantityGrams) {
            this._supply[animalFood.type].dailyQuantityGrams +=
                this._supplyToOrder[animalFood.type];
            console.log(`refill for ${animalFood.type} was done`);
        }
    }
}
