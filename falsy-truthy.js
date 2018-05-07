// Truthy and Falsy - DO NOT RUN THIS PROGRAM!

// These 7 conditions are considered falsy

if(false)        {} else {console.log('false is falsy');}
if(null)         {} else {console.log('null is falsy');}
if(undefined)    {} else {console.log('undefined is falsy');}
if(0)            {} else {console.log('0 is falsy');}
if(NaN)          {} else {console.log('Not a Number is falsy');}
if('')           {} else {console.log('an empty string with single quotes is falsy');}
if("")           {} else {console.log('an empty string with double quotes is falsy');}


// Everything else is truthy

if(true)         {console.log('true is truthy');}
if({})           {console.log('an empty object is truthy');}
if([])           {console.log('an empty array is truthy');}

if('bob')        {console.log('a non-empty string is truthy');}
if(new RegEx())  {console.log('a new instance of an object is truthy');}

if(10)           {console.log('positive integers are truthy');}
if(-10)          {console.log('negative integers are truthy');}
if(1.23)         {console.log('positive floats are truthy');}
if(-1.23)        {console.log('negative floats are truthy');}
if(infinity)     {console.log('positive infinity is truthy');}
if(-infinity)    {console.log('negative infinity is truthy');}
