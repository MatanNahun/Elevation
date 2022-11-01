class Animal {
  type: object;
  name: string;
  food: string;

  constructor(type: object, name: string, food: string) {
    this.type = type;
    this.name = name;
    this.food = food;
  }
}

class Mammal extends Animal {
  _durationOfPregnancy: number;

  constructor(
    type: object,
    name: string,
    food: string,
    durationOfPregnancy: number
  ) {
    super(type, name, food);
    this._durationOfPregnancy = durationOfPregnancy;
  }

  get durationOfPregnancy(): number {
    return this._durationOfPregnancy;
  }
}

class SeaCreature extends Animal {
  _lowestDepth: number;

  constructor(type: object, name: string, food: string, lowestDepth: number) {
    super(type, name, food);
    this._lowestDepth = lowestDepth;
  }

  get lowestDepth(): number {
    return this._lowestDepth;
  }
}

class Bird extends Animal {
  _wingSpan: number;

  constructor(type: object, name: string, food: string, wingSpan: number) {
    super(type, name, food);
    this._wingSpan = wingSpan;
  }

  get wingSpan(): number {
    return this._wingSpan;
  }
}
