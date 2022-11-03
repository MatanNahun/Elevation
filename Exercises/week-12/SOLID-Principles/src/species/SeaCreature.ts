class SeaCreature extends Animal {
  _lowestDepth: number;

  constructor(name: string, food: object, lowestDepth: number) {
    super(name, food);
    this._lowestDepth = lowestDepth;
  }

  get lowestDepth(): number {
    return this._lowestDepth;
  }
}
