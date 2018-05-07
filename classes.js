// Javascript Classes

// Class Declaration

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log('Make = ' + this.make + '   Model = ' + this.model
                        + '   Year = ' + this.year);
    }
}

// Create an instance of a Car

let myCar = new Car('BMW', '745Li', 2010);
myCar.print();

class SportsCar extends Car {
    revEngine() {
        console.log('Vrrroommm goes the ' + this.model);
    }
}
let mySportsCar = new SportsCar('Dodge', 'Ram 1500', 2005);
mySportsCar.print();
mySportsCar.revEngine();

//myCar.revEngine(); // Can not do. Not a member of the Car class, just SportsCar class.

//console.log('The Model is a ' + myCar.model);


///////////////////////////////////////////////////////////////////////////////
/* // Class Expression

let car = class {

} */