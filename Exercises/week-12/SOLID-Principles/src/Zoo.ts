class Zoo {
  private _animals: Animal[];
  private _supply: any = {};

  constructor() {
    this._animals = [];
    this._supply = {
      meat: new Food("meat", 1000000),
      planktons: new Food("plankton", 2000000000),
      algae: new Food("algae", 1500),
      seeds: new Food("seeds", 1200),
      worms: new Food("worms", 1000),
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
      console.log(animal.feed());
      let animalFood = animal.food;
      this.removeFromSupply(animalFood);
    });
  }
}
