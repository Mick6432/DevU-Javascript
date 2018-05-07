// Regular Expressions

let pattern = /xyz/;  //regular expressions go between foward slashes.

console.log(pattern);  //prints out the expression /xyz/.
console.log(typeof pattern);  //returns type object.


let value = 'This is xyz a test.';

console.log(pattern.test(value));  //test to see if value matches the exprssion in pattern
console.log(value);  // print out value
//console.log(value.replace(pattern, 'just')); //replace xyz in value with 'just'.

console.log(value.match(pattern));
var match = value.match(pattern);

console.log(match.index);

