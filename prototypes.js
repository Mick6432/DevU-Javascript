// Objects and the Prototype Chain

// OLOO - Objects Linking to Other Objects
// Javascript is an Object Based language not
// Object Oriented language like C++ and C#.

let originalCar = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    description: 'This is from originalCar'
};

let newCar = Object.create(originalCar);
console.log(newCar.description + '\n');

console.log(Object.getPrototypeOf(newCar)); // points to originalCar.

let myPrototype = Object.getPrototypeOf(newCar); //myPrototype -> newCar -> originalCar
console.log('\n' + myPrototype.description + '\n');

originalCar.doors = 4; // add a new property to an object
console.log(Object.getPrototypeOf(newCar)); //newCar now has a door property
console.log('\n' + newCar.doors + '\n');

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));

newCar.description = 'This is now a new property from newCar'; //added a new description property to newCar.
console.log('\n' + newCar.description +'\n');         //now it doesn't use the originalCar property.

console.log(newCar.newProperty);  .
//myPrototype -> newCar -> originalCar -> Object
//If it can not find property following chain back
//to Object, the it will return an undefined primitive type.