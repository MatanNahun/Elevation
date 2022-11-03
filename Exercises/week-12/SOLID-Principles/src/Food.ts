class Food {
  private _type: string;
  private _dailyQuantityGrams: number;

  constructor(type: string, dailyQuantityGrams: number) {
    this._type = type;
    this._dailyQuantityGrams = dailyQuantityGrams;
  }

  get type(): string {
    return this._type;
  }

  get dailyQuantityGrams(): number {
    return this._dailyQuantityGrams;
  }

  set dailyQuantityGrams(amount: number) {
    this._dailyQuantityGrams = amount;
  }
}
