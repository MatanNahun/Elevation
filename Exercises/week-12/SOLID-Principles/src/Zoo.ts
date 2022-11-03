class Zoo {
  private _animals: Animal[];
  private _supply: any = {};
  private _supplyToOrder: any = {
    meat: 60000,
    planktons: 2000000000,
    algae: 33,
    seeds: 1200,
    worms: 800,
  };

  constructor() {
    this._animals = [];
    this._supply = {
      meat: new Food("meat", this._supplyToOrder.meat),
      planktons: new Food("plankton", this._supplyToOrder.planktons),
      algae: new Food("algae", this._supplyToOrder.algae),
      seeds: new Food("seeds", this._supplyToOrder.seeds),
      worms: new Food("worms", this._supplyToOrder.worms),
    };
  }

  addAnimalToZoo(animal: Animal) {
    this._animals.push(animal);
  }

  removeFromSupply(food: Food) {
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

  refillIfNeeded(animalFood: Food) {
    if (
      this._supply[animalFood.type].dailyQuantityGrams <
      animalFood.dailyQuantityGrams
    ) {
      this._supply[animalFood.type].dailyQuantityGrams +=
        this._supplyToOrder[animalFood.type];
      console.log(`refill for ${animalFood.type} was done`);
    }
  }
}
