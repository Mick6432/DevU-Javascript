// null Datatype

console.clear();
// if a variable that is defined but not initialized
// it will return an undefined.
let a;  
console.log(a);
console.log(typeof a);
///////////////////////////////////////////////////////////////////////

// if a object is not initialized it returns null
// not undefined like a variable.
let pattern = /xyz/;  //regular expressions go between foward slashes.
let value = 'This is a test.';
let result = value.match(pattern);
    if(result === null) {
        console.log('no match was found.')
    } else {
        console.log(result);
    }

console.log(result);

// because of a quirk with javascript typeof null
// returns an object, NOT a null primative or native.
console.log(typeof result);  

