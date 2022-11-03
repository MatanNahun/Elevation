class Animal {
  private _name: string;
  private _food: Food;

  constructor(name: string, food: Food) {
    this._name = name;
    this._food = food;
  }

  get food(): Food {
    return this._food;
  }

  feed() {
    return `${this._name} has just ate!`;
  }
}
