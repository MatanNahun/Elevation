const TWOWEEKS = 14;

let zoo = new Zoo();

zoo.addAnimalToZoo(new Lion("Simba"));
zoo.addAnimalToZoo(new Lion("Nala"));

zoo.addAnimalToZoo(new Whale("Willy"));

zoo.addAnimalToZoo(new Goose("Akka"));

zoo.addAnimalToZoo(new Owl("Hedwig"));

zoo.addAnimalToZoo(new ClownFish("Nemo"));
zoo.addAnimalToZoo(new ClownFish("Marlin"));

console.log(zoo);

for (let i = 0; i < TWOWEEKS; i++) {
  zoo.dailyfeed();
}

console.log(zoo);
