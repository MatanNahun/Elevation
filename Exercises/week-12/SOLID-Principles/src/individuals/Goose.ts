class Goose extends Mammal {
  constructor(name: string) {
    super(name, new Food("seeds", 1), 10);
  }
}
