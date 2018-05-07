// Built in Natives

// Built in natives start with an upper case
// Built in primitives start with lower case.

let myString = new String('Howdy ');
console.log(myString.toString());

console.log(typeof myString);
console.log(typeof myString.toString());

/* 
List of built in natives
    Number()
    String()
    Boolean()
    Object()
    Function()
    Symbol()
They all correspond to a primitive type

Natives that do not correspond to a primitive type are
    Array()
    Regex()
These are objects

Foundational data types
    Date()
    Error()
 */

 let myPrimitive = 'THIS IS CRAZY';
 console.log(myPrimitive.toLocaleLowerCase());

 let myNumber = new Number(7);
 console.log(typeof myNumber);
 let myPrimitiveType = myNumber.valueOf();
 console.log(typeof myPrimitiveType);