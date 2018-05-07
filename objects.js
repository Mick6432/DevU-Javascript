// Objects

let car = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    getPrice: function() {
        //perform some calc.
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
};

//let price = car.getPrice();
console.log(typeof car + '\n');
car.printDescription();
console.log(car.year + '\tPrice $' + car.getPrice() + '.00');

// Add another member to car
car.color = 'black';

console.log(car.color);