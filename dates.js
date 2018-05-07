// Date Type

console.clear();  //clear the screen

let today = new Date();

let myBirthday = new Date('August 15, 1956 07:15:00');

var elapsedTime = today - myBirthday;
// Milliseconds
console.log(`Milliseconds = ${elapsedTime}`);  // returns in milliseconds
// Seconds
let elapsedTimeSeconds = elapsedTime/1000;
console.log(`Seconds = ${elapsedTimeSeconds}`);
// Minutes
let elapsedTimeMinutes = elapsedTimeSeconds/60;
console.log(`Minutes = ${elapsedTimeMinutes}`);
// Hours
let elapsedTimeHours = elapsedTimeMinutes/60;
console.log(`Hours = ${elapsedTimeHours}`);
// Days
let elapsedTimeDays = elapsedTimeHours/24;
console.log(`Days = ${elapsedTimeDays}`);
// Months
let elapsedTimeMonths = elapsedTimeDays/365.25*12;
console.log(`Months = ${elapsedTimeMonths}`);
// Years
let elapsedTimeYears = elapsedTimeDays/365.25; 
console.log(`Years = ${elapsedTimeYears}\n`);

console.log(myBirthday.getDate());  // returns the day (ie: 15 for myBirthday)
console.log(myBirthday.getTime());

// Additional Date Functions
/* 
getMonth();
getDay();

getHours();
getMinutes();
getSeconds();
getMilliseconds();
 */