// Scope Basics
// Any variable declared outside a code block can
// referenced in inner code blocks.  Any variable 
// decleared inside a code block can not be referenced
// outside that code block.

console.clear();

let a = 'first';  // can be accessed in any code block

function scopeTest() {
    console.log(a);
    a = 'changed'; // can also change a variables value.

    let b = 'second'; // can only be accessed inside scopeTest function
    console.log(b);

        if(a != '') {
            console.log(a);
            console.log(`Inside 'if' code block:  b = ${b}`);
            let c ='third';  // can only be accessed inside if code block
        }
    //console.log(c); // will cause program to crash.
}

scopeTest();

/* 
// can not be accessed outside of
// code block where it was declared.
console.log(b); // will cause program to crash.
 */