// Declare and assign an array
let a = [4,5,8,15,16,23,42];
let b = ['David', 'Eddie', 'Alex', 'Michael'];

// Print out individual elements
console.log(a[0]);
console.log(a[1]);
// Print out entire array
console.log(a);

// Print out individual elements
console.log(b[2]);
console.log(b[3]);
// Print out entire array
console.log(b);

// Change a element of an array
a[0] = 7;
// Print out individual elements
console.log(a[0]);
console.log(a[1]);
// Print out entire array
console.log(a);

// Data type of an array - Object
console.log(typeof a);
console.log(typeof b);

// Arrays can hold any data type
let c = [4, 'Alex', true]; // Three different data types: int, string and bool.
console.log(c);

// Trying to access an array element that is out of bounds of the array will return undefined.
console.log(b[4]);

// Get length of an array
console.log(a.length);

// Expanding array - NOT advisable
//a[10] = 77;
//console.log(a);

// Better way to expand array
a.push(77);
console.log(a);
console.log(a.length);

// Remove elements of an array
a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.length);