// Function declaration without arguments
function sayHello() {
    console.log('-----------------------');
    console.log('Hello');
    console.log('-----------------------');
}

sayHello(); // Call Function

// Function declaration with arguments
function sayHelloName(name) {
    console.log('-----------------------');
    console.log('Hello ' + name + '!');
    console.log('-----------------------');
}

// Call Function with arguments
sayHelloName('Mike');
sayHelloName('Bill');
sayHelloName('Martha');

// Function with arguments and return value
function calculateTax(amount) {
    let result = amount * .0825;
    return result;
}

let total = 100;
// Function call with arguments and a return value.
let tax = calculateTax(total);
console.log('Tax on ' + total + ' is ' + tax);