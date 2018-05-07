// String Object Methods

let first = 'Knowledge is power but enthusiasm pulls the switch';
let second = 'Do or do not. There is no try. (Yoda)';
let third = '4,8,15,16,23,42';

console.clear();  // Always clear screen.

// You can call string methods on string literals.
            // toUpperCase() Method
console.log('bob loves you'.toLocaleUpperCase());


            // split() Method
/* Split a string into substrings using the specified separator and return them as an array.
@param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
@param limit — A value used to limit the number of elements returned in the array.*/

let mySplit = third.split(',', 3);

console.log(third + '   Original String'); 
console.log(mySplit + '    split String');


            // slice() Method
/* The slice() method extracts parts of a string and returns the extracted parts in a new string.
Use the start and end parameters to specify the part of the string you want to extract.
The first character has the position 0, the second has position 1, and so on.
Tip: Use a negative number to select from the end of the string.  */

let mySlice = first.slice(13, 18);
console.log(mySlice);


            // substr() Method
/* The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
Tip: To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).
Note: The substr() method does not change the original string. */

let mySubstr = first.substr(13, 5);
console.log(mySubstr);


            // endsWith() Method
/* The endsWith() method determines whether a string ends with the characters of a specified string.
This method returns true if the string ends with the characters, and false if not.
Note: The endsWith() method is case sensitive. */

let myEndsWith = second.endsWith('try.');
console.log(myEndsWith);


            // startsWith() Method
/* The startsWith() method determines whether a string begins with the characters of a specified string.
This method returns true if the string begins with the characters, and false if not.
Note: The startsWith() method is case sensitive. */

console.log(second.startsWith('Do'));


            // includes() Method
/* The includes() method determines whether a string contains the characters of a specified string.
This method returns true if the string contains the characters, and false if not.
Note: The includes() method is case sensitive. */

console.log(second.includes('There'));


            // repeat() Method
/* The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was
called, concatenated together. */

console.log('Ha! '.repeat(5));


            // trim() Method
/* The trim() method removes whitespace from both sides of a string.
Note: The trim() method does not change the original string. */

let myTrim = '      bloated     ';
            console.log(myTrim.length);
            console.log(myTrim.trim().length);