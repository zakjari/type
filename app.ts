interface Vehicul {
  make: string;
  model: string;
  year: number;
  start(): void;
  stop():void;
}

class Car implements Vehicul {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
}
start(): void {
    console.log("Car engine started");
}
stop(): void {
    console.log("vehicul sarret")
}
}


// type voiture  = {
    
// marque :string;
// modele: string;
// annee :number;

// };
const car = new Car('toyoya','yaris',2022);
car.start()

