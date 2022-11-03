class Bird extends Animal {
  _wingSpan: number;

  constructor(name: string, food: Food, wingSpan: number) {
    super(name, food);
    this._wingSpan = wingSpan;
  }

  get wingSpan(): number {
    return this._wingSpan;
  }
}
