// What is “this”
// When a function is called a new execution context is created
// by the JavaScript engine that exists until the function has
// finished executing. Every execution context contains a reference
// to an object, “this”.
// What “this” refers to depends on where and how the function that
// is being executed is called. Identifying where the function is
// called (the “call-site”) will help you determine what “this” refers to.

// There are only four different scenarios to remember.
// 1. Default Binding
// 2. Implicit Binding
// 3. Explicit Binding
// 4. New Binding
//=============================================================================

/* let car = {
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
}; */
//================================================================================

// Default Binding
function first() {
    return this;
}

// "this" is Nodes Global object
// because that's where the
// first method was called.
console.log(first() === global);
//========================================

function second() {
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined);

// "this" depends on HOW a function is called.
// An object can be passed as the first argument to call()
// or apply() and "this" will be bound to it.
let myObject = {value:'My Object'};

// This object is set on the Global Object.
global.value = 'Global Object';

function third(name, name1) {
    //Returns somthing different depending on
    //how method is called.
    return this.value + name + name1;
}

// 2. Implicit Binding
console.log(third(' bill '));  //first argument is not an object so "this" is bound to global.

// 3. Explicit Binding 
//Both call() and apply() allow you to explicitly set
//what you want to represent "this". The difference is
//in how additional arguments to the function are sent.
console.log(third.call(myObject, ' mike', ' dick' + ' (Used call method)'));  //first argument is myObject so "this" is
console.log(third.apply(myObject, [' bob', ' jim'])); //bound to myObject.
//============================================================================================


function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    lastName: 'Colatrella',
    firstName: 'Michael',

    print: fifth
}

let customer2 = {
    lastName: 'James',
    firstName: 'Jesse',

    print: fifth
}

customer1.print();
customer2.print();