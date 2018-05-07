// Arrow Functions
// A shortcut methode to creating functions.

/* 
// Regular way to create a function.
let hi = function(name) {
    console.log('Howdy ' + name);
}
 */

 console.clear();  // Clears the console screen.

// Create the same function using an arrow function
// The '=>' is called a fat arrow.
// let hi = (name) => {console.log('Howdy ' + name);}
let hi = (name) => {console.log(`Howdy ${name}\n`);}  // use the backtick not single quote

hi('Mike');

// Create a function with a return parameter.
let add = (a, b) => {return a + b;}

console.log('Answer: ' + add(7, 3) + '\n');

let names = ['David', 'Eddie', 'Alex', 'Michael'];

names.map((name) => {console.log('Howdy ' + name + '!')});
console.log('\n');
names.map( (name) => {console.log(`Howdy ${name}!`)});
console.log('\n');