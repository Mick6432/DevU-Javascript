// The 'if' decision statement
//----------------------------

console.log('The if statement')

let count = 1;

while (count <= 5) {
    if (count == 4) {
        console.log('Count is ' + count + ' and ' + count + ' is equal to 4. HURRAY!!');
    } else if (count == 5) {
        console.log('Count is ' + count + '. Time to STOP! ');
    } else if (count == 3) {
        console.log('Count is ' + count + '. Getting Close!! ');
    } else {
        console.log('Count is ' + count + ' and ' + count + ' is NOT equal to 4');
    }
    count++;
}

console.log('end run\n');
//====================================================================================

// The 'switch' decision statement
//--------------------------------

console.log('The switch statement');
let hero = 'Batman';
//let hero = 'Green Arrow';
//let hero = 'Superman';

switch (hero.toLowerCase()) {
    case 'superman':
        console.log('Superman');
        console.log('\tSuper Strength');
        console.log('\tX-Ray Vision\n');
        break;
    case 'batman':
        console.log('Batman');
        console.log('\tExcellent Fighting Skills');
        console.log('\tIntellegent\n');
        break;
    default:
        console.log('Member of the Justice League of America (JLA)\n');
}
//=========================================================================================

// Ternary Operator    '?'
//-----------------

console.log('The ternary operator');
let a = 1, b = '1';
//let result = (a == b) ? 'equal' : 'NOT equal'; //prints equal because variables are coercioned
//console.log(result);
console.log((a == b) ? 'equal' : 'NOT equal'); //above 2 lines can be done inline

//result = (a === b) ? 'equal' : 'NOT equal';  //prints NOT equal because 'a' is not forced to string
//console.log(result);                         //and a string and an int are not equal.
console.log((a === b) ? 'equal' : 'NOT equal'); //above 2 lines can be done inline