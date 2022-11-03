class Owl extends Bird {
  constructor(name: string) {
    super(name, new Food("worms", 100), 3);
  }
}
