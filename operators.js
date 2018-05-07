// Categories of operators

// 1. Assignment Operator '='
// 2. Arithmetic Operators
//  i.   Addition '+'
//  ii.  Subtraction '-'
//  iii. Multiplication '*'
//  iv.  Division '/'
//  v.   Modulus '%'
let m = 10 % 3;
console.log('Modulus = ' + m);
//  vi.  Increment   '++'
//  vii. Decrement   '--'

var a = 1;  //a = 1
a++;        //a = 2
//console.log('a = ' + a++); //prints 'a' then increments. prints 2
console.log('a = ' + ++a); //would increment 'a' first then print. prints 3
console.log('now a = ' + a);  //a = 3

// String Operators ' '  +

// Precedence Operators
var b = 1 + 2 * 3;
console.log('b = ' + b);
b = (1 + 2) * 3;
console.log('Now b = ' + b);

// Function invocation operator ()

// Logical and && 
// Logical or ||

// Member Access Operator '.' dot operator

// Code Block operator { }

// Array element access operator [ ]