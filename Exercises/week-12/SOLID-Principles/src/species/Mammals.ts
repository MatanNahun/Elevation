class Mammal extends Animal {
  _durationOfPregnancy: number;

  constructor(name: string, food: object, durationOfPregnancy: number) {
    super(name, food);
    this._durationOfPregnancy = durationOfPregnancy;
  }

  get durationOfPregnancy(): number {
    return this._durationOfPregnancy;
  }
}
