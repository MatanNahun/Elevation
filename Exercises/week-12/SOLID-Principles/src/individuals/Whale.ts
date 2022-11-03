class Whale extends SeaCreature {
  constructor(name: string) {
    super(name, new Food("planktons", 2000), 100);
  }
}
