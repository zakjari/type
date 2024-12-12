var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// type voiture  = {
// marque :string;
// modele: string;
// annee :number;
// };
var car = new Car('toyoya', 'yaris', 2022);
car.start();
