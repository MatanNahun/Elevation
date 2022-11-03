class Lion extends Mammal {
  constructor(name: string) {
    super(name, new Food("meat", 6), 3);
  }
}
