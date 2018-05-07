// Closures

// A closure is a function having access to the parent scope,
// even after the parent function has closed.

// A closure is formed by returning a function object that was created
// within an execution context of a function call from that function
// call and assigning a reference to that inner function to a property
// of another object. Or by directly assigning a reference to such a function
// object to, for example, a global variable, a property of a globally accessible
// object or an object passed by reference as an argument to the outer function call.

function sayHello(name) {
    //
    return function() {
        console.log('Howdy there, ' + name);
    }
}

let mike = sayHello('Mike');
let bill = sayHello("Bill");
let ed = sayHello('Ed');

mike();
bill();
ed();

console.log('\n' + typeof mike); //typeof returns function because that is what it points to.