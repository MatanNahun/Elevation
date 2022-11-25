enum VehicleType {
  Bus,
  Plane,
  Taxi,
  Boat,
}

class Passenger {
  private _name: string;
  private _favoriteVehicle: VehicleType;
  constructor(name: string, favoriteVehicle: VehicleType) {
    this._name = name;
    this._favoriteVehicle = favoriteVehicle;
  }
  public get name() {
    return this._name;
  }
  public get favoriteVehicle() {
    return this._favoriteVehicle;
  }
}

interface Vehicle {
  transport(passenger: Passenger): void;
}

class Bus implements Vehicle {
  transport(passenger: Passenger): void {
    console.log(
      `${passenger.name} passed successfully on the ${this.constructor.name} `
    );
  }
}
class Plane implements Vehicle {
  transport(passenger: Passenger): void {
    console.log(
      `${passenger.name} passed successfully on the ${this.constructor.name} `
    );
  }
}
class Taxi implements Vehicle {
  transport(passenger: Passenger): void {
    console.log(
      `${passenger.name} passed successfully on the ${this.constructor.name} `
    );
  }
}
class Boat implements Vehicle {
  transport(passenger: Passenger): void {
    console.log(
      `${passenger.name} passed successfully on the ${this.constructor.name} `
    );
  }
}

class VehicleFactory {
  private static instance: VehicleFactory;
  private VehicleConstructor = {
    [VehicleType.Boat]: Boat,
    [VehicleType.Bus]: Bus,
    [VehicleType.Plane]: Plane,
    [VehicleType.Taxi]: Taxi,
  };
  private constructor() {}
  public static getInstance(): VehicleFactory {
    if (!VehicleFactory.instance) {
      VehicleFactory.instance = new VehicleFactory();
    }
    return VehicleFactory.instance;
  }
  public createVehicle(type: VehicleType): Vehicle {
    return new this.VehicleConstructor[type]();
  }
}

class TravelAgency {
  private vehicles: Map<VehicleType, number>;
  private vehicleFactory: VehicleFactory;
  constructor() {
    this.vehicles = new Map<VehicleType, number>([
      [VehicleType.Boat, 3],
      [VehicleType.Bus, 4],
      [VehicleType.Plane, 1],
      [VehicleType.Taxi, 8],
    ]);
    this.vehicleFactory = VehicleFactory.getInstance();
  }
  public getVehicleToPassenger(passenger: Passenger): Vehicle | null {
    const numOfFavoriteVehicle =
      this.vehicles.get(passenger.favoriteVehicle) || 0;
    if (numOfFavoriteVehicle > 0) {
      this.vehicles.set(passenger.favoriteVehicle, numOfFavoriteVehicle - 1);
      return this.vehicleFactory.createVehicle(passenger.favoriteVehicle);
    }
    for (const entry of Array.from(this.vehicles.entries())) {
      if (entry[1] > 0) {
        this.vehicles.set(entry[0], entry[1] - 1);
        return this.vehicleFactory.createVehicle(entry[0]);
      }
    }

    return null;
  }
}
const t = new TravelAgency();
const p1 = new Passenger("itay", VehicleType.Boat);
const p2 = new Passenger("Dekel", VehicleType.Boat);
const p3 = new Passenger("Ohad", VehicleType.Boat);
const p4 = new Passenger("Yagel", VehicleType.Boat);
const p5 = new Passenger("Elik", VehicleType.Bus);
const p6 = new Passenger("Shalev", VehicleType.Bus);
const p7 = new Passenger("Nir", VehicleType.Taxi);
const p8 = new Passenger("Yossi", VehicleType.Plane);
const p9 = new Passenger("Shlomo", VehicleType.Plane);
const p10 = new Passenger("Yakov", VehicleType.Plane);

t.getVehicleToPassenger(p1)?.transport(p1);
t.getVehicleToPassenger(p2)?.transport(p2);
t.getVehicleToPassenger(p3)?.transport(p3);
t.getVehicleToPassenger(p4)?.transport(p4);
t.getVehicleToPassenger(p5)?.transport(p5);
t.getVehicleToPassenger(p6)?.transport(p6);
t.getVehicleToPassenger(p7)?.transport(p7);
t.getVehicleToPassenger(p8)?.transport(p8);
t.getVehicleToPassenger(p9)?.transport(p9);
t.getVehicleToPassenger(p10)?.transport(p10);
