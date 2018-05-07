
/* 
let car = {
    make: 'BMW',
    model: '745li',
    year: 2010
};
 */

 function Car(make, model, year) {
     this.make = make;
     this.model = model;
     this.year = year;
 }

 let myCar = new Car('BMW', '745li', 2010);
 console.log(myCar);

 function MyFunction() {
        console.log('I am a simple function.');
 }

 let myFunction = new MyFunction();
 console.log(typeof myFunction);

 // Can't do anything with this myFunction object.
 // It is NOT a function reference anymore.
 // myFunction();  // Can NOT do !!
 
 //myFunction(); //causes an error.