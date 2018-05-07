let x = 7;
let y = '6';
y = parseInt(y, 10); //convert string to interger base 10
let z = x + y;
console.log('Answer: ' + z);

let d = 'bob';
d = parseInt(d, 10); //outputs NaN for Not a Number
let e = isNaN(d);    //tests for Nan returns a boolean
console.log(e);
e = isNaN(x);
console.log(e);
console.log(d);